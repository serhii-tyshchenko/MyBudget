import { createPortal } from 'react-dom';
import { useLocalization } from 'hooks';

import { getClassName } from 'utils';
import { UIIconButton } from 'components/atoms';

import './UIModal.scss';

const NAME_SPACE = 'ui-modal';

const UIModal = ({
  title, isVisible, onClose, children, className,
}) => {
  const STR = useLocalization();
  const componentClassName = getClassName(NAME_SPACE, className);

  const modalRoot = document.getElementById('portal-root');

  return isVisible ? createPortal(
    (
      <div className={`${NAME_SPACE}__backdrop`}>
        <div
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
          className={componentClassName}
        >
          <header className={`${NAME_SPACE}__header`}>
            <h4 id="modal-title" className={`${NAME_SPACE}__title`}>{title}</h4>
            <UIIconButton
              className={`${NAME_SPACE}__btn-close`}
              icon="cancel"
              size="big"
              onClick={onClose}
              title={STR.CLOSE}
            />
          </header>
          <main className={`${NAME_SPACE}__main`}>{children}</main>
        </div>
      </div>
    ),
    modalRoot,
  ) : null;
};

UIModal.defaultProps = {
  title: 'Modal title',
  isVisible: false,
  className: '',
};

export { UIModal };
