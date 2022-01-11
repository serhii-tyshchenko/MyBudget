import { TExpense } from 'types/expense';

export type TExpenseModalProps = {
  onClose: Function;
  onSave: Function;
  isVisible: boolean;
  data?: TExpense;
  mode: string;
};
