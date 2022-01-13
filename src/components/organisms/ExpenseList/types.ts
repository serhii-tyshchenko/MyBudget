import { TExpense } from 'types';

export type TExpenseListProps = {
  onEditItem: Function;
  onDeleteItem: Function;
  data: Array<TExpense>;
};
