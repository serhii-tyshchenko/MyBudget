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

  return isVisible && createPortal(
    (
      <div className={`${NAME_SPACE}__backdrop`}>
        <div
          role="dialog"
          aria-labelledby="ui-modal-title"
          aria-modal="true"
          className={componentClassName}
        >
          <div className="ui-modal__header">
            <h4 id="ui-modal-title" className={`${NAME_SPACE}__title`}>{title}</h4>
            <UIIconButton
              className={`${NAME_SPACE}__btn-close`}
              icon="cancel"
              size="big"
              onClick={onClose}
              title={STR.CLOSE}
            />
          </div>
          <div className={`${NAME_SPACE}__content`}>{children}</div>
        </div>
      </div>
    ),
    modalRoot,
  );
};

UIModal.defaultProps = {
  title: 'Modal title',
  isVisible: false,
  className: '',
};

export { UIModal };
