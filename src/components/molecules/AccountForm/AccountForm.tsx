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
      <main className="account-form__main">
        <UIFormGroup>
          <span className="account-form__label">Account name: </span>
          <UIInput
            placeholder="cash, bank account etc"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className="account-form__label">Inital balance: </span>
          <UIInput
            type="number"
            onChange={handleChange}
            name="initial-balance"
            value={formData.initialBalance}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span>Currency: </span>
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
          <span>Hide from list: </span>
          <UICheckbox
            checked={formData.isHidden}
            name="is-hidden"
            onChange={handleChange}
          />
        </UIFormGroup>
      </main>
      <footer className="account-form__footer">
        <UIButton text="Add" onClick={handleSubmit} />
        <UIButton btnType="secondary" text="Cancel" onClick={onClose} />
      </footer>
    </form>
  );
};

export { AccountForm };
