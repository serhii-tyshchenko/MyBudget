import { TAccount } from 'types/account';

export type TAccountFormProps = {
  onSave: Function;
  onClose: Function;
  data?: TAccount;
};
