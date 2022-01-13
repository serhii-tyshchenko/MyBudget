import { TIncome } from 'types';

export type TIncomeListProps = {
  onEditItem: Function;
  onDeleteItem: Function;
  data: Array<TIncome>;
};
