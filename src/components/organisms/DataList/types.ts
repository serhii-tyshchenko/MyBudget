import { TRecord } from 'types';

export type TProps = {
  onEditItem: Function;
  onDeleteItem: Function;
  data: Array<TRecord>;
};
