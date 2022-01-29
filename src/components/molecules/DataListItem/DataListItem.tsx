import { useCallback } from 'react';

import { useLocalization } from 'hooks';

import { UIIconButton } from 'components/atoms';

import { useFormatData } from './hooks';
import { TProps } from './types';
import { NAME_SPACE } from './constants';

import './DataListItem.scss';

const DataListItem = ({ data, onDeleteClick, onEditClick }: TProps) => {
  const { id, date, amount, note, account, category } = data;
  const STR = useLocalization();

  const { accountName, categoryName } = useFormatData(account, category);

  const handleDeleteClick = useCallback(
    () => onDeleteClick(id),
    [id, onDeleteClick]
  );

  const handleEditClick = useCallback(() => onEditClick(id), [id, onEditClick]);

  return (
    <li className={NAME_SPACE}>
      <div className={`${NAME_SPACE}__data`}>
        <span className={`${NAME_SPACE}__date`}>{date}</span>
        <span className={`${NAME_SPACE}__account`}>{accountName}</span>
        <span className={`${NAME_SPACE}__category`}>{categoryName}</span>
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

export { DataListItem };
