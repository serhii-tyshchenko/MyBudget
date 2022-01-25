import { UIButton } from 'components/atoms';
import { UIModal } from 'components/molecules';
import { TProps } from './types';

import './UIModalConfirm.scss';

const NAME_SPACE = 'ui-modal-confirm';

const UIModalConfirm = ({
  title,
  saveBtnTitle = 'Save',
  cancelBtnTitle = 'Cancel',
  isVisible,
  onClose,
  onSave,
  children,
}: TProps) =>
  isVisible ? (
    <UIModal
      title={title}
      isVisible={isVisible}
      onClose={onClose}
      className={NAME_SPACE}
    >
      <section className={`${NAME_SPACE}__content`}>{children}</section>
      <footer className={`${NAME_SPACE}__footer`}>
        <UIButton btnType="primary" text={saveBtnTitle} onClick={onSave} />
        <UIButton btnType="secondary" text={cancelBtnTitle} onClick={onClose} />
      </footer>
    </UIModal>
  ) : null;

export { UIModalConfirm };
