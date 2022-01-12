import { TIncome } from 'types/income';

export type TIncomeFormProps = {
  onSave: Function;
  onClose: Function;
  data?: TIncome;
};
