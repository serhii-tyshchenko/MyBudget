import { useState } from 'react';
import { UIFormGroup } from 'components/molecules';
import { UIInput, UIButton, UISelect, UITextarea } from 'components/atoms';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';
import { incomeCategories } from 'mocks/categories';

import { TIncomeFormProps } from './types';
import { NAME_SPACE, defaultFormData } from './constants';
import { getSelectOptions } from './utils';

import './IncomeForm.scss';

const IncomeForm = ({ data, onClose, onSave }: TIncomeFormProps) => {
  const [formData, setFormData] = useState(data || defaultFormData);
  const { accounts } = useSelector((state: TRootState) => state);
  const accountOptions = getSelectOptions(accounts);
  const incomeOptions = getSelectOptions(incomeCategories);

  const handleChange = (e: { target: { name: any; value: any } }) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    onSave(formData);
    setFormData(defaultFormData);
  };

  return (
    <form className={NAME_SPACE} onSubmit={handleSubmit}>
      <main className={`${NAME_SPACE}__main`}>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>Date: </span>
          <UIInput
            type="date"
            onChange={handleChange}
            name="date"
            value={formData.date}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>Account: </span>
          <UISelect
            name="account"
            value={formData.account}
            options={accountOptions}
            onChange={handleChange}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>Category: </span>
          <UISelect
            name="category"
            value={formData.category}
            options={incomeOptions}
            onChange={handleChange}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>Amount: </span>
          <UIInput
            type="number"
            onChange={handleChange}
            name="amount"
            value={formData.amount}
          />
        </UIFormGroup>
        <UIFormGroup vertical>
          <span className={`${NAME_SPACE}__label`}>Note: </span>
          <UITextarea
            name="note"
            value={formData.note}
            onChange={handleChange}
          />
        </UIFormGroup>
      </main>
      <footer className={`${NAME_SPACE}__footer`}>
        <UIButton text="Add" onClick={handleSubmit} />
        <UIButton btnType="secondary" text="Cancel" onClick={onClose} />
      </footer>
    </form>
  );
};

export { IncomeForm };
