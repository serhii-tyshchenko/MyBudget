/* eslint-disable jsx-a11y/no-autofocus */
import { getClassName } from 'utils';

import { defaultProps, propTypes } from './UITextarea.props';
import { NAME_SPACE } from './constants';

import './UITextarea.scss';

const UITextarea = (props) => {
  const {
    name,
    value,
    onChange,
    onBlur,
    className,
    placeholder,
    required,
    disabled,
  } = props;
  const componentClassName = getClassName(NAME_SPACE, className);

  return (
    <textarea
      name={name}
      value={value}
      className={componentClassName}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      size={value.length}
    />
  );
};

UITextarea.defaultProps = defaultProps;

UITextarea.propTypes = propTypes;

export { UITextarea };
