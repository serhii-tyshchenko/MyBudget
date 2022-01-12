import { TIncome } from 'types/income';

export type TIncomeModalProps = {
  onClose: Function;
  onSave: Function;
  isVisible: boolean;
  data?: TIncome;
  mode: string;
};
