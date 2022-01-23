import { TAccount, TCategory, TRecord } from 'types';

export type TDataFormProps = {
  onSave: Function;
  onClose: Function;
  data?: TRecord;
  accounts: Array<TAccount>;
  categories: Array<TCategory>;
};
