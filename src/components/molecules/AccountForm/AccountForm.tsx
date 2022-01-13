import { useState } from 'react';
import { UIFormGroup } from 'components/molecules';
import { UIInput, UICheckbox, UIButton, UISelect } from 'components/atoms';

import { TAccountFormProps } from './types';
import { NAME_SPACE, defaultFormData } from './constants';

import './AccountForm.scss';

const AccountForm = ({ data, onClose, onSave }: TAccountFormProps) => {
  const [formData, setFormData] = useState(data || defaultFormData);

  const handleChange = (e: {
    target: { name: any; value: any; checked: any };
  }) => {
    let elName = e.target.name;
    let elValue = e.target.value;
    if (elName === 'initial-balance') {
      elName = 'initialBalance';
    }
    if (elName === 'is-hidden') {
      elName = 'isHidden';
      elValue = e.target.checked;
    }
    setFormData({ ...formData, [elName]: elValue });
  };

  const handleSubmit = () => {
    onSave(formData);
    setFormData(defaultFormData);
  };

  return (
    <form className={NAME_SPACE} onSubmit={handleSubmit}>
      <main className={`${NAME_SPACE}__main`}>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>Account name: </span>
          <UIInput
            placeholder="cash, bank account etc"
            onChange={handleChange}
            name="name"
            value={formData.name}
            className={`${NAME_SPACE}__name`}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>Inital balance: </span>
          <UIInput
            type="number"
            onChange={handleChange}
            name="initial-balance"
            value={formData.initialBalance}
            className={`${NAME_SPACE}__balance`}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>Currency: </span>
          <UISelect
            name="currency"
            value={formData.currency}
            options={[
              { value: 'uah', label: 'UAH' },
              { value: 'usd', label: 'USD' },
            ]}
            onChange={handleChange}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>Hide from list: </span>
          <UICheckbox
            checked={formData.isHidden}
            name="is-hidden"
            onChange={handleChange}
          />
        </UIFormGroup>
      </main>
      <footer className={`${NAME_SPACE}__footer`}>
        <UIButton
          text="Add"
          onClick={handleSubmit}
          className={`${NAME_SPACE}__submit-btn`}
        />
        <UIButton btnType="secondary" text="Cancel" onClick={onClose} />
      </footer>
    </form>
  );
};

export { AccountForm };
