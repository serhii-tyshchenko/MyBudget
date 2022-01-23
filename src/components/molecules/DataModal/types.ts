import { TAccount, TCategory, TRecord } from 'types';

export type TProps = {
  onClose: Function;
  onSave: Function;
  isVisible: boolean;
  data?: TRecord;
  accounts: Array<TAccount>;
  categories: Array<TCategory>;
  title: string;
};
