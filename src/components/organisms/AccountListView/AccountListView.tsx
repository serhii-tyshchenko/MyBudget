import { useState } from 'react';
import { getId } from 'utils';
import { useSelector, useDispatch } from 'react-redux';
import { addAccount, updateAccount, removeAccount } from 'store/actions';
import { AccountListItem, AccountModal } from 'components/molecules';
import { UIIconButton } from 'components/atoms';
import { TRootState } from 'store';

import { TAccount } from 'types/account';

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

  const { accounts } = useSelector((state: TRootState) => state);

  const handleDeleteClick = (id: string): void => {
    if (window.confirm('Are you sure?')) {
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
          <h3 className={`${NAME_SPACE}__title`}>Account List</h3>
          <UIIconButton icon="plus" size="big" onClick={handleAddClick} />
        </header>
        <ul className="account-list">
          {accounts.map((account: TAccount) => (
            <AccountListItem
              data={account}
              onDeleteClick={handleDeleteClick}
              onEditClick={handleEditClick}
              key={account.id}
            />
          ))}
        </ul>
      </section>
      <AccountModal
        isVisible={isModalVisible}
        onClose={handleClose}
        onSave={handleSave}
        data={formData}
        mode={modalMode}
      />
    </>
  );
};

export { AccountListView };
