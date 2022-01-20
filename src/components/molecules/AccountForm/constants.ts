import { TAccount } from 'types';

export const NAME_SPACE = 'account-form';

export const defaultFormData: TAccount = {
  id: '',
  name: '',
  initialBalance: 0,
  isHidden: false,
  currency: 'uah',
};
