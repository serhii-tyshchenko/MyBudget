import { ExpenseListItem } from 'components/molecules';

import { TExpenseListProps } from './types';

import './ExpenseList.scss';

const NAME_SPACE = 'expense-list';

const ExpenseList = ({ data, onEditItem, onDeleteItem }: TExpenseListProps) => (
  <ul className={NAME_SPACE}>
    {data.map((expense) => (
      <ExpenseListItem
        data={expense}
        onDeleteClick={onDeleteItem}
        onEditClick={onEditItem}
        key={expense.id}
      />
    ))}
  </ul>
);

export { ExpenseList };
