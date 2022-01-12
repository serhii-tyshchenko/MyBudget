import { UIModal, IncomeForm } from 'components/molecules';

import { TIncomeModalProps } from './types';

const IncomeModal = ({
  onClose,
  onSave,
  isVisible,
  data,
  mode,
}: TIncomeModalProps) => {
  const title = mode === 'add' ? 'Add income' : 'Edit income';

  return (
    <UIModal isVisible={isVisible} onClose={onClose} title={title}>
      <IncomeForm onClose={onClose} onSave={onSave} data={data} />
    </UIModal>
  );
};

export { IncomeModal };
