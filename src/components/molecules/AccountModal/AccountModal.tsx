import { UIModal, AccountForm } from 'components/molecules';

import { TAccountModalProps } from './types';

const AccountModal = ({
  onClose,
  onSave,
  isVisible,
  data,
  mode,
}: TAccountModalProps) => {
  const title = mode === 'add' ? 'Add account' : 'Edit account';

  return (
    <UIModal isVisible={isVisible} onClose={onClose} title={title}>
      <AccountForm onClose={onClose} onSave={onSave} data={data} />
    </UIModal>
  );
};

export { AccountModal };
