import { TAccount } from 'types';

export type TAccountModalProps = {
  onClose: Function;
  onSave: Function;
  isVisible: boolean;
  data?: TAccount;
  title: string;
};
