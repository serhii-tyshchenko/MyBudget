import { DataListItem, DataListItemHeader } from 'components/molecules';

import { TProps } from './types';

import './DataList.scss';

const NAME_SPACE = 'data-list';

const DataList = ({ data, onEditItem, onDeleteItem }: TProps) => (
  <ul className={NAME_SPACE}>
    <DataListItemHeader />
    {data.map((item) => (
      <DataListItem
        data={item}
        onDeleteClick={onDeleteItem}
        onEditClick={onEditItem}
        key={item.id}
      />
    ))}
  </ul>
);

export { DataList };
