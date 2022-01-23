import { useSelector, useDispatch } from 'react-redux';
import { TRootState } from 'store';
import { addIncome, updateIncome, removeIncome } from 'store/actions';

import { useLocalization } from 'hooks';

import { DataListView } from 'components/organisms';

import { getId } from 'utils';

import { TRecord } from 'types';

const IncomeListView = () => {
  const dispatch = useDispatch();
  const STR = useLocalization();

  const { incomes, accounts, settings } = useSelector(
    (state: TRootState) => state
  );

  const onDelete = (id: string) => dispatch(removeIncome(id));
  const onUpdate = (data: TRecord) => dispatch(updateIncome(data.id, data));
  const onAdd = (data: TRecord) =>
    dispatch(addIncome({ ...data, id: getId() }));

  return (
    <DataListView
      data={incomes}
      accounts={accounts}
      categories={settings.categories.incomes}
      title={STR.INCOME}
      onDelete={onDelete}
      onUpdate={onUpdate}
      onAdd={onAdd}
    />
  );
};

export { IncomeListView };
