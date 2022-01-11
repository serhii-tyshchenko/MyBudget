import { TExpense } from 'types/expense';

export type TExpenseListProps = {
  onEditItem: Function;
  onDeleteItem: Function;
  data: Array<TExpense>;
};
