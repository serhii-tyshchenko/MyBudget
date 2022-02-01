import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { TRootState } from 'store';

import { getNameById } from '../utils';

export const useFormatData = (account: string, category: string) => {
  const {
    accounts,
    settings: { categories },
  } = useSelector((state: TRootState) => state);

  const accountName = useMemo(
    () => getNameById(accounts, account),
    [accounts, account]
  );

  const categoryName = useMemo(
    () =>
      getNameById([...categories.expenses, ...categories.incomes], category),
    [categories, category]
  );

  return { accountName, categoryName };
};
