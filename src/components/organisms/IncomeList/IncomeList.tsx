import { IncomeListItem } from 'components/molecules';

import { TIncomeListProps } from './types';

import './IncomeList.scss';

const NAME_SPACE = 'income-list';

const IncomeList = ({ data, onEditItem, onDeleteItem }: TIncomeListProps) => (
  <ul className={NAME_SPACE}>
    {data.map((income) => (
      <IncomeListItem
        data={income}
        onDeleteClick={onDeleteItem}
        onEditClick={onEditItem}
        key={income.id}
      />
    ))}
  </ul>
);

export { IncomeList };
