import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Localization } from 'contexts';

import { addAccount, updateAccount, removeAccount } from 'store/actions';
import { TRootState } from 'store';

import { AccountListItem, AccountModal } from 'components/molecules';
import { UIIconButton } from 'components/atoms';
import { getId, isEmpty } from 'utils';

import { TAccount } from 'types';

import './AccountListView.scss';

const defaultFormData: TAccount = {
  id: '',
  name: 'New account',
  initialBalance: 0,
  isHidden: false,
  currency: 'uah',
};

const NAME_SPACE = 'account-list-view';

const AccountListView = () => {
  const [modalMode, setModalMode] = useState('add');
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  const dispatch = useDispatch();
  const STR = useContext(Localization);

  const { accounts, expenses, incomes } = useSelector(
    (state: TRootState) => state
  );

  const getAccountBalance = (id: string): number => {
    const initialBalance = Number(
      accounts.find((item) => item.id === id).initialBalance
    );
    const accountExpenses = expenses
      .filter((expense) => expense.account === id)
      .reduce((acc, item) => acc + +item.amount, 0);
    const accountIncomes = incomes
      .filter((income) => income.account === id)
      .reduce((acc, item) => acc + +item.amount, 0);
    return initialBalance + accountIncomes - accountExpenses;
  };

  const handleDeleteClick = (id: string): void => {
    if (window.confirm(STR.ACCOUNT_DELETE_CONFIRM)) {
      dispatch(removeAccount(id));
    }
  };

  const handleEditClick = (id: string): void => {
    setModalMode('edit');
    const account = accounts.find((account) => account.id === id);
    setFormData(account);
    setModalVisible(true);
  };

  const handleAddClick = () => {
    setModalMode('add');
    setFormData(defaultFormData);
    setModalVisible(true);
  };
  const handleClose = () => setModalVisible(false);
  const handleSave = (data: TAccount) => {
    if (modalMode === 'add') {
      dispatch(addAccount({ ...data, id: getId() }));
    } else {
      dispatch(updateAccount(data.id, data));
    }

    setModalVisible(false);
  };

  return (
    <>
      <section className={NAME_SPACE}>
        <header className={`${NAME_SPACE}__header`}>
          <h3 className={`${NAME_SPACE}__title`}>{STR.ACCOUNTS}</h3>
          <UIIconButton
            icon="plus"
            size="big"
            onClick={handleAddClick}
            title={STR.ADD_ACCOUNT}
          />
        </header>
        {!isEmpty(accounts) ? (
          <ul className="account-list">
            {accounts.map((account: TAccount) => (
              <AccountListItem
                data={account}
                balance={getAccountBalance(account.id)}
                onDeleteClick={handleDeleteClick}
                onEditClick={handleEditClick}
                key={account.id}
              />
            ))}
          </ul>
        ) : (
          <p>No data to show. Click '+' to add account.</p>
        )}
      </section>
      <AccountModal
        isVisible={isModalVisible}
        onClose={handleClose}
        onSave={handleSave}
        data={formData}
        mode={modalMode}
        STR={STR}
      />
    </>
  );
};

export { AccountListView };
