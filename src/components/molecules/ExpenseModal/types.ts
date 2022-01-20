import { TExpense } from 'types';

export type TExpenseModalProps = {
  onClose: Function;
  onSave: Function;
  isVisible: boolean;
  data?: TExpense;
  mode: string;
};
