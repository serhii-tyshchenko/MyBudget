import { useCallback } from 'react';
import { UIIconButton } from 'components/atoms';

import './AccountListItem.scss';

const NAME_SPACE = 'account-list-item';

type TAccountListItemProps = {
  onDeleteClick: Function;
  onEditClick: Function;
  data: { id: string; name: string; currency: string; initialBalance: number };
  balance: number;
};

const AccountListItem = ({
  data,
  balance,
  onDeleteClick,
  onEditClick,
}: TAccountListItemProps) => {
  const { id, name, currency } = data;

  const handleDeleteClick = useCallback(
    () => onDeleteClick(id),
    [id, onDeleteClick]
  );

  const handleEditClick = useCallback(() => onEditClick(id), [id, onEditClick]);

  return (
    <li className={NAME_SPACE}>
      <div className={`${NAME_SPACE}__data`}>
        <span className={`${NAME_SPACE}__name`}>{name}</span>
        <span className={`${NAME_SPACE}__balance`}>
          {balance} {currency}
        </span>
      </div>
      <div className={`${NAME_SPACE}__controls`}>
        <UIIconButton
          icon="pencil"
          title="Edit account"
          onClick={handleEditClick}
        />
        <UIIconButton
          icon="trash"
          title="Remove account"
          onClick={handleDeleteClick}
        />
      </div>
    </li>
  );
};

export { AccountListItem };
