import { useState } from 'react';
import { useLocalization } from 'hooks';

import { UIFormGroup } from 'components/molecules';
import { UIInput, UICheckbox, UIButton, UISelect } from 'components/atoms';

import { TAccountFormProps } from './types';
import { NAME_SPACE, defaultFormData } from './constants';

import './AccountForm.scss';

const AccountForm = ({ data, onClose, onSave }: TAccountFormProps) => {
  const [formData, setFormData] = useState(data || defaultFormData);
  const STR = useLocalization();

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
          <span className={`${NAME_SPACE}__label`}>{STR.ACCOUNT_NAME}</span>
          <UIInput
            placeholder="cash, bank account etc"
            onChange={handleChange}
            name="name"
            value={formData.name}
            className={`${NAME_SPACE}__name`}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>{STR.INITIAL_BALANCE}</span>
          <UIInput
            type="number"
            onChange={handleChange}
            name="initial-balance"
            value={formData.initialBalance}
            className={`${NAME_SPACE}__balance`}
          />
        </UIFormGroup>
        <UIFormGroup>
          <span className={`${NAME_SPACE}__label`}>{STR.CURRENCY}</span>
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
          <span className={`${NAME_SPACE}__label`}>{STR.HIDE_FROM_LIST}</span>
          <UICheckbox
            checked={formData.isHidden}
            name="is-hidden"
            onChange={handleChange}
          />
        </UIFormGroup>
      </main>
      <footer className={`${NAME_SPACE}__footer`}>
        <UIButton
          text={STR.ADD}
          onClick={handleSubmit}
          className={`${NAME_SPACE}__submit-btn`}
        />
        <UIButton btnType="secondary" text={STR.CANCEL} onClick={onClose} />
      </footer>
    </form>
  );
};

export { AccountForm };
