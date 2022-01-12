import { useCallback } from 'react';
import { UIIconButton } from 'components/atoms';
import { TIncome } from 'types/income';

import './IncomeListItem.scss';

const NAME_SPACE = 'income-list-item';

type TIncomeListItemProps = {
  onDeleteClick: Function;
  onEditClick: Function;
  data: TIncome;
};

const IncomeListItem = ({
  data,
  onDeleteClick,
  onEditClick,
}: TIncomeListItemProps) => {
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

export { IncomeListItem };
