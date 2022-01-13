import { useCallback } from 'react';
import { UIIconButton } from 'components/atoms';
import { TExpense } from 'types';

import './ExpenseListItem.scss';

const NAME_SPACE = 'expense-list-item';

type TExpenseListItemProps = {
  onDeleteClick: Function;
  onEditClick: Function;
  data: TExpense;
};

const ExpenseListItem = ({
  data,
  onDeleteClick,
  onEditClick,
}: TExpenseListItemProps) => {
  const { id, date, amount, note, account, category } = data;

  const handleDeleteClick = useCallback(
    () => onDeleteClick(id),
    [id, onDeleteClick]
  );

  const handleEditClick = useCallback(() => onEditClick(id), [id, onEditClick]);

  return (
    <li className={NAME_SPACE}>
      <div className={`${NAME_SPACE}__data`}>
        <span>Date: {date}</span>
        <span>Account: {account}</span>
        <span>Category: {category}</span>
        <span>Amount: {amount}</span>
        {note && <span>Note: {note}</span>}
      </div>
      <div className={`${NAME_SPACE}__controls`}>
        <UIIconButton
          icon="pencil"
          title="Edit expense"
          onClick={handleEditClick}
        />
        <UIIconButton
          icon="trash"
          title="Remove expense"
          onClick={handleDeleteClick}
        />
      </div>
    </li>
  );
};

export { ExpenseListItem };
