import { useState } from 'react';
import { useLocalization } from 'hooks';

import { UIIconButton } from 'components/atoms';
import { DataModal } from 'components/molecules';
import { DataList } from 'components/organisms';

import { isEmpty } from 'utils';

import { TAccount, TRecord, TCategory } from 'types';

import './DataListView.scss';

const defaultFormData: TRecord = {
  id: '',
  date: '',
  account: '',
  category: '',
  amount: 0,
  note: '',
};

const NAME_SPACE = 'data-list-view';

type TProps = {
  title: string;
  onDelete: Function;
  onUpdate: Function;
  onAdd: Function;
  data: Array<TRecord>;
  accounts: Array<TAccount>;
  categories: Array<TCategory>;
};

const DataListView = ({
  data,
  accounts,
  categories,
  title,
  onDelete,
  onUpdate,
  onAdd,
}: TProps) => {
  const [modalMode, setModalMode] = useState('add');
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  const STR = useLocalization();

  const modalTitle = String(
    modalMode === 'add' ? STR.ADD_RECORD : STR.EDIT_RECORD
  );

  const handleDeleteClick = (id: string): void => {
    if (window.confirm(String(STR.RECORD_DELETE_CONFIRM))) {
      onDelete(id);
    }
  };

  const handleEditClick = (id: string): void => {
    setModalMode('edit');
    const dataItem = data.find((item: TRecord) => item.id === id);
    if (dataItem) {
      setFormData(dataItem);
    }
    setModalVisible(true);
  };

  const handleAddClick = () => {
    setModalMode('add');
    setFormData(defaultFormData);
    setModalVisible(true);
  };
  const handleClose = () => setModalVisible(false);
  const handleSave = (data: TRecord) => {
    if (modalMode === 'add') {
      onAdd(data);
    } else {
      onUpdate(data);
    }
    setModalVisible(false);
  };

  return (
    <>
      <section className={NAME_SPACE}>
        <header className={`${NAME_SPACE}__header`}>
          <h3 className={`${NAME_SPACE}__title`}>{title}</h3>
          <UIIconButton
            icon="plus"
            size="big"
            onClick={handleAddClick}
            title={STR.ADD_RECORD}
          />
        </header>
        {!isEmpty(data) ? (
          <DataList
            data={data}
            onEditItem={handleEditClick}
            onDeleteItem={handleDeleteClick}
          />
        ) : (
          <p>No data to show</p>
        )}
      </section>
      <DataModal
        isVisible={isModalVisible}
        onClose={handleClose}
        onSave={handleSave}
        data={formData}
        title={modalTitle}
        accounts={accounts}
        categories={categories}
      />
    </>
  );
};

export { DataListView };
