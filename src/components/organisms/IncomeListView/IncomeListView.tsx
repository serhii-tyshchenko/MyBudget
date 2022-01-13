import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { TRootState } from 'store';
import { addIncome, updateIncome, removeIncome } from 'store/actions';

import { IncomeModal } from 'components/molecules';
import { UIIconButton } from 'components/atoms';
import { IncomeList } from 'components/organisms';

import { isEmpty, getId } from 'utils';

import { TIncome } from 'types';

import './IncomeListView.scss';

const defaultFormData: TIncome = {
  id: '',
  date: '',
  account: '',
  category: '',
  amount: 0,
  note: '',
};

const NAME_SPACE = 'income-list-view';

const IncomeListView = () => {
  const [modalMode, setModalMode] = useState('add');
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  const dispatch = useDispatch();

  const { incomes } = useSelector((state: TRootState) => state);

  const handleDeleteClick = (id: string): void => {
    if (window.confirm('Are you sure?')) {
      dispatch(removeIncome(id));
    }
  };

  const handleEditClick = (id: string): void => {
    setModalMode('edit');
    const income = incomes.find((income) => income.id === id);
    setFormData(income);
    setModalVisible(true);
  };

  const handleAddClick = () => {
    setModalMode('add');
    setFormData(defaultFormData);
    setModalVisible(true);
  };
  const handleClose = () => setModalVisible(false);
  const handleSave = (data: TIncome) => {
    if (modalMode === 'add') {
      dispatch(addIncome({ ...data, id: getId() }));
    } else {
      dispatch(updateIncome(data.id, data));
    }

    setModalVisible(false);
  };

  return (
    <>
      <section className={NAME_SPACE}>
        <header className={`${NAME_SPACE}__header`}>
          <h3 className={`${NAME_SPACE}__title`}>Income List</h3>
          <UIIconButton
            icon="plus"
            size="big"
            onClick={handleAddClick}
            title="Add income"
          />
        </header>
        {!isEmpty(incomes) ? (
          <IncomeList
            data={incomes}
            onEditItem={handleEditClick}
            onDeleteItem={handleDeleteClick}
          />
        ) : (
          <p>No data to show</p>
        )}
      </section>
      <IncomeModal
        isVisible={isModalVisible}
        onClose={handleClose}
        onSave={handleSave}
        data={formData}
        mode={modalMode}
      />
    </>
  );
};

export { IncomeListView };
