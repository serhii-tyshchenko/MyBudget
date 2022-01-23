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
        <span>
          {STR.DATE}: {date}
        </span>
        <span>
          {STR.ACCOUNT}: {account}
        </span>
        <span>
          {STR.CATEGORY}: {category}
        </span>
        <span>
          {STR.AMOUNT}: {amount}
        </span>
        <span>
          {STR.NOTE}: {note}
        </span>
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

export { DataListItem };
