import { UIModal, AccountForm } from 'components/molecules';

import { TAccountModalProps } from './types';

const AccountModal = ({
  onClose,
  onSave,
  isVisible,
  data,
  title,
}: TAccountModalProps) => {
  return (
    <UIModal isVisible={isVisible} onClose={onClose} title={title}>
      <AccountForm onClose={onClose} onSave={onSave} data={data} />
    </UIModal>
  );
};

export { AccountModal };
