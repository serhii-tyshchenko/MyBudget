import PropTypes from 'prop-types';
import { getClassName } from 'utils';

import './UIInput.scss';

const NAME_SPACE = 'ui-input';

const UIInput = (props) => {
  const {
    type, name, value, onChange, onBlur, className, placeholder, required, autofocus, disabled,
  } = props;
  const componentClassName = getClassName(NAME_SPACE, className);

  return (
    <input
      type={type}
      name={name}
      value={value}
      className={componentClassName}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
      autoFocus={autofocus}
      disabled={disabled}
      size={value.length}
    />
  );
};

UIInput.defaultProps = {
  className: '',
  onChange: null,
  onBlur: null,
  value: '',
  type: 'text',
  name: 'ui-input',
  placeholder: '',
  required: false,
  autofocus: false,
  disabled: false,
};

UIInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
};

export { UIInput };
