import { TIncome } from 'types';

export type TIncomeModalProps = {
  onClose: Function;
  onSave: Function;
  isVisible: boolean;
  data?: TIncome;
  mode: string;
};
