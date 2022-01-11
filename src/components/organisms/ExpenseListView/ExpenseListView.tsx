import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { TRootState } from 'store';
import { addExpense, updateExpense, removeExpense } from 'store/actions';

import { ExpenseModal } from 'components/molecules';
import { UIIconButton } from 'components/atoms';
import { ExpenseList } from 'components/organisms';

import { isEmpty, getId } from 'utils';

import { TExpense } from 'types/expense';

import './ExpenseListView.scss';

const defaultFormData: TExpense = {
  id: '',
  date: '',
  account: '',
  category: '',
  amount: 0,
  note: '',
};

const NAME_SPACE = 'expense-list-view';

const ExpenseListView = () => {
  const [modalMode, setModalMode] = useState('add');
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  const dispatch = useDispatch();

  const { expenses } = useSelector((state: TRootState) => state);

  const handleDeleteClick = (id: string): void => {
    if (window.confirm('Are you sure?')) {
      dispatch(removeExpense(id));
    }
  };

  const handleEditClick = (id: string): void => {
    setModalMode('edit');
    const expense = expenses.find((expense) => expense.id === id);
    setFormData(expense);
    setModalVisible(true);
  };

  const handleAddClick = () => {
    setModalMode('add');
    setFormData(defaultFormData);
    setModalVisible(true);
  };
  const handleClose = () => setModalVisible(false);
  const handleSave = (data: TExpense) => {
    if (modalMode === 'add') {
      dispatch(addExpense({ ...data, id: getId() }));
    } else {
      dispatch(updateExpense(data.id, data));
    }

    setModalVisible(false);
  };

  return (
    <>
      <section className={NAME_SPACE}>
        <header className={`${NAME_SPACE}__header`}>
          <h3 className={`${NAME_SPACE}__title`}>Expense List</h3>
          <UIIconButton
            icon="plus"
            size="big"
            onClick={handleAddClick}
            title="Add expense"
          />
        </header>
        {!isEmpty(expenses) ? (
          <ExpenseList
            data={expenses}
            onEditItem={handleEditClick}
            onDeleteItem={handleDeleteClick}
          />
        ) : (
          <p>No data to show</p>
        )}
      </section>
      <ExpenseModal
        isVisible={isModalVisible}
        onClose={handleClose}
        onSave={handleSave}
        data={formData}
        mode={modalMode}
      />
    </>
  );
};

export { ExpenseListView };
