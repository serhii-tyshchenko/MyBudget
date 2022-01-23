import { UIModal, DataForm } from 'components/molecules';

import { TProps } from './types';

const DataModal = ({
  onClose,
  onSave,
  isVisible,
  data,
  accounts,
  categories,
  title,
}: TProps) => (
  <UIModal isVisible={isVisible} onClose={onClose} title={title}>
    <DataForm
      onClose={onClose}
      onSave={onSave}
      data={data}
      accounts={accounts}
      categories={categories}
    />
  </UIModal>
);

export { DataModal };
