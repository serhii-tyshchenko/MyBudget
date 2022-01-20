import { TAccount, TTranslation } from 'types';

export type TAccountFormProps = {
  onSave: Function;
  onClose: Function;
  data?: TAccount;
  STR: TTranslation;
};
