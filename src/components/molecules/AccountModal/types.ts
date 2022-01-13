import { TAccount, TTranslation } from 'types';

export type TAccountModalProps = {
  onClose: Function;
  onSave: Function;
  isVisible: boolean;
  data?: TAccount;
  mode: string;
  STR: TTranslation;
};
