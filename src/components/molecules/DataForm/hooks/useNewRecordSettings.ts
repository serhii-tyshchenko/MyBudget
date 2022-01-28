import { TAccount, TCategory } from 'types';

import { getSelectOptions } from '../utils';

type TProps = {
  accounts: Array<TAccount>;
  categories: Array<TCategory>;
};

export const useNewRecordSettings = ({ accounts, categories }: TProps) => {
  const accountOptions = getSelectOptions(accounts);
  const categoryOptions = getSelectOptions(categories);

  return { accountOptions, categoryOptions };
};
