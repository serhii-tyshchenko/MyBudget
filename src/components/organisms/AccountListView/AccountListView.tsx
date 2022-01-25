import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocalization, useModalState } from 'hooks';

import { addAccount, updateAccount, removeAccount } from 'store/actions';
import { TRootState } from 'store';

import { AddButton } from 'components/atoms';
import { AccountModal } from 'components/molecules';
import { AccountList } from 'components/organisms';

import { getId } from 'utils';

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
  const [formData, setFormData] = useState(defaultFormData);
  const dispatch = useDispatch();

  const STR = useLocalization();
  const { isOpen, closeModal, openModal } = useModalState();

  const { accounts } = useSelector((state: TRootState) => state);

  const modalTitle = modalMode === 'add' ? STR.ADD_ACCOUNT : STR.EDIT_ACCOUNT;

  const handleDelete = (id: string): void => {
    if (window.confirm(STR.ACCOUNT_DELETE_CONFIRM)) {
      dispatch(removeAccount(id));
    }
  };

  const handleEdit = (id: string): void => {
    setModalMode('edit');
    const account = accounts.find((account) => account.id === id);
    setFormData(account);
    openModal();
  };

  const handleAdd = () => {
    setModalMode('add');
    setFormData(defaultFormData);
    openModal();
  };

  const handleSave = (data: TAccount) => {
    if (modalMode === 'add') {
      dispatch(addAccount({ ...data, id: getId() }));
    } else {
      dispatch(updateAccount(data.id, data));
    }
    closeModal();
  };

  return (
    <>
      <section className={NAME_SPACE}>
        <header className={`${NAME_SPACE}__header`}>
          <h3 className={`${NAME_SPACE}__title`}>{STR.ACCOUNTS}</h3>
          <AddButton onClick={handleAdd} title={STR.ADD_ACCOUNT} />
        </header>
        <AccountList
          data={accounts}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </section>
      <AccountModal
        isVisible={isOpen}
        onClose={closeModal}
        onSave={handleSave}
        data={formData}
        title={modalTitle}
      />
    </>
  );
};

export { AccountListView };
