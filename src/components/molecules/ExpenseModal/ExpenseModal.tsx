import { UIModal, ExpenseForm } from 'components/molecules';

import { TExpenseModalProps } from './types';

const ExpenseModal = ({
  onClose,
  onSave,
  isVisible,
  data,
  mode,
}: TExpenseModalProps) => {
  const title = mode === 'add' ? 'Add expense' : 'Edit expense';

  return (
    <UIModal isVisible={isVisible} onClose={onClose} title={title}>
      <ExpenseForm onClose={onClose} onSave={onSave} data={data} />
    </UIModal>
  );
};

export { ExpenseModal };
