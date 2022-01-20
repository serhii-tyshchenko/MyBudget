import { TExpense } from 'types';

export const NAME_SPACE = 'expense-form';

export const defaultFormData: TExpense = {
  id: '',
  date: '',
  account: '',
  category: '',
  amount: 0,
  note: '',
};
