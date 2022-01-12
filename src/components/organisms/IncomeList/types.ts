import { TIncome } from 'types/income';

export type TIncomeListProps = {
  onEditItem: Function;
  onDeleteItem: Function;
  data: Array<TIncome>;
};
