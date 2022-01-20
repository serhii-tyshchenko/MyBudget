import { TExpense } from 'types';

export type TExpenseFormProps = {
  onSave: Function;
  onClose: Function;
  data?: TExpense;
};
