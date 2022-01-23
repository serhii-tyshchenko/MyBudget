import { useSelector, useDispatch } from 'react-redux';
import { TRootState } from 'store';
import { addExpense, updateExpense, removeExpense } from 'store/actions';

import { useLocalization } from 'hooks';

import { DataListView } from 'components/organisms';

import { getId } from 'utils';

import { TRecord } from 'types';

const ExpenseListView = () => {
  const dispatch = useDispatch();
  const STR = useLocalization();

  const { expenses, accounts, settings } = useSelector(
    (state: TRootState) => state
  );

  const onDelete = (id: string) => dispatch(removeExpense(id));
  const onUpdate = (data: TRecord) => dispatch(updateExpense(data.id, data));
  const onAdd = (data: TRecord) =>
    dispatch(addExpense({ ...data, id: getId() }));

  return (
    <DataListView
      data={expenses}
      accounts={accounts}
      categories={settings.categories.expenses}
      title={STR.EXPENSES}
      onDelete={onDelete}
      onUpdate={onUpdate}
      onAdd={onAdd}
    />
  );
};

export { ExpenseListView };
