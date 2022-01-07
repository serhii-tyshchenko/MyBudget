import { TAccount } from 'types/account';

export const NAME_SPACE = 'account-form';

export const defaultFormData: TAccount = {
  id: '',
  name: 'New account',
  initialBalance: 0,
  isHidden: false,
  currency: 'uah',
};
