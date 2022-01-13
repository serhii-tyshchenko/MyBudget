import { UIModal, AccountForm } from 'components/molecules';

import { TAccountModalProps } from './types';

import { TTranslation } from 'types';

const AccountModal = ({
  onClose,
  onSave,
  isVisible,
  data,
  mode,
  STR,
}: TAccountModalProps) => {
  const titlesConfig: TTranslation = {
    add: STR.ADD_ACCOUNT,
    edit: STR.EDIT_ACCOUNT,
  };

  return (
    <UIModal isVisible={isVisible} onClose={onClose} title={titlesConfig[mode]}>
      <AccountForm onClose={onClose} onSave={onSave} data={data} STR={STR} />
    </UIModal>
  );
};

export { AccountModal };
