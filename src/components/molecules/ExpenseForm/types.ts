import { TExpense } from 'types/expense';

export type TExpenseFormProps = {
  onSave: Function;
  onClose: Function;
  data?: TExpense;
};
