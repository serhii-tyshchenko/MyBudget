import { useState } from 'react';
import { useLocalization } from 'hooks';

import { UIInput, UIButton, UISelect, UITextarea } from 'components/atoms';
import { UIFormGroup } from 'components/molecules';

import { TDataFormProps } from './types';
import { NAME_SPACE, defaultFormData } from './constants';
import { useNewRecordSettings } from './hooks';

import './DataForm.scss';

const DataForm = ({
  data,
  accounts,
  categories,
  onClose,
  onSave,
}: TDataFormProps) => {
  const [formData, setFormData] = useState(data || defaultFormData);
  const STR = useLocalization();
  const { accountOptions, categoryOptions } = useNewRecordSettings({
    accounts,
    categories,
  });

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
          <span className={`${NAME_SPACE}__label`}>{STR.DATE}</span>
          <UIInput
            type="date"
            onChange={handleChange}
            name="date"
            value={formData.date}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>{STR.ACCOUNT}</span>
          <UISelect
            name="account"
            value={formData.account}
            options={accountOptions}
            onChange={handleChange}
            className={`${NAME_SPACE}__field-account`}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>{STR.CATEGORY}</span>
          <UISelect
            name="category"
            value={formData.category}
            options={categoryOptions}
            onChange={handleChange}
            className={`${NAME_SPACE}__field-category`}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>{STR.AMOUNT}</span>
          <UIInput
            type="number"
            onChange={handleChange}
            name="amount"
            value={formData.amount}
            className={`${NAME_SPACE}__field-amount`}
          />
        </UIFormGroup>
        <UIFormGroup vertical>
          <span
            className={`${NAME_SPACE}__label ${NAME_SPACE}__label--vertical`}
          >
            {STR.NOTE}
          </span>
          <UITextarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            className={`${NAME_SPACE}__field-note`}
          />
        </UIFormGroup>
      </main>
      <footer className={`${NAME_SPACE}__footer`}>
        <UIButton text={STR.SAVE} onClick={handleSubmit} />
        <UIButton btnType="secondary" text={STR.CANCEL} onClick={onClose} />
      </footer>
    </form>
  );
};

export { DataForm };
