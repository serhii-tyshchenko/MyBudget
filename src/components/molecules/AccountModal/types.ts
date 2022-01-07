import { TAccount } from 'types/account';

export type TAccountModalProps = {
  onClose: Function;
  onSave: Function;
  isVisible: boolean;
  data?: TAccount;
  mode: string;
};
