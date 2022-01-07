import PropTypes from 'prop-types';
import { getClassName } from 'utils';
import { createPortal } from 'react-dom';
import { UIIconButton } from 'components/atoms';

import './UINotification.scss';

const titles = {
  info: 'Information',
  error: 'Error',
  warning: 'Warning',
  success: 'Succes',
};

const NAME_SPACE = 'ui-notification';

const UINotification = (props) => {
  const {
    message, type, extraClassName, isVisible, onCloseClick, autoclose,
  } = props;
  const modalRoot = document.getElementById('modal-root');
  const componentClassName = getClassName(NAME_SPACE, `${NAME_SPACE}--${type}`, extraClassName);

  const timer = (autoclose && isVisible) ? setTimeout(() => onCloseClick(), 3000) : null;

  const handleCloseClick = () => {
    clearTimeout(timer);
    onCloseClick();
  }

  return isVisible ? createPortal((
    <div className={componentClassName}>
      <main className={`${NAME_SPACE}__content`}>
        <h4 className={`${NAME_SPACE}__title`}>{titles[type]}</h4>
        <span className={`${NAME_SPACE}__message`}>{message}</span>
      </main>
      <UIIconButton
        icon="cancel"
        onClick={handleCloseClick}
        title="Close"
        className={`${NAME_SPACE}__close-btn`}
      />
    </div>
  ), modalRoot) : null;
};

UINotification.defaultProps = {
  message: 'Info message',
  type: 'info',
  extraClassName: '',
  isVisible: false,
  onCloseClick: null,
  autoclose: true,
};

UINotification.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  extraClassName: PropTypes.string,
  isVisible: PropTypes.bool,
  autoclose: PropTypes.bool,
  onCloseClick: PropTypes.func,
};

export { UINotification };
