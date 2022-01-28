import { useCallback } from 'react';
import { useLocalization } from 'hooks';
import { TRecord } from 'types';

import { UIIconButton } from 'components/atoms';

import './DataListItem.scss';

const NAME_SPACE = 'data-list-item';

type TProps = {
  onDeleteClick: Function;
  onEditClick: Function;
  data: TRecord;
};

const DataListItem = ({ data, onDeleteClick, onEditClick }: TProps) => {
  const { id, date, amount, note, account, category } = data;
  const STR = useLocalization();

  const handleDeleteClick = useCallback(
    () => onDeleteClick(id),
    [id, onDeleteClick]
  );

  const handleEditClick = useCallback(() => onEditClick(id), [id, onEditClick]);

  return (
    <li className={NAME_SPACE}>
      <div className={`${NAME_SPACE}__data`}>
        <span className={`${NAME_SPACE}__date`}>{date}</span>
        <span className={`${NAME_SPACE}__account`}>{account}</span>
        <span className={`${NAME_SPACE}__category`}>{category}</span>
        <span className={`${NAME_SPACE}__amount`}>{amount}</span>
        <span className={`${NAME_SPACE}__note`}>{note}</span>
      </div>
      <div className={`${NAME_SPACE}__controls`}>
        <UIIconButton
          icon="pencil"
          title={STR.EDIT_RECORD}
          onClick={handleEditClick}
        />
        <UIIconButton
          icon="trash"
          title={STR.REMOVE_RECORD}
          onClick={handleDeleteClick}
        />
      </div>
    </li>
  );
};
const DataListItemHeader = () => {
  const STR = useLocalization();

  return (
    <li className={`${NAME_SPACE} ${NAME_SPACE}--header`}>
      <div className={`${NAME_SPACE}__data`}>
        <span className={`${NAME_SPACE}__date`}>{STR.DATE}</span>
        <span className={`${NAME_SPACE}__account`}>{STR.ACCOUNT}</span>
        <span className={`${NAME_SPACE}__category`}>{STR.CATEGORY}</span>
        <span className={`${NAME_SPACE}__amount`}>{STR.AMOUNT}</span>
        <span className={`${NAME_SPACE}__note`}>{STR.NOTE}</span>
      </div>
      <div className={`${NAME_SPACE}__controls`} />
    </li>
  );
};

export { DataListItem, DataListItemHeader };
