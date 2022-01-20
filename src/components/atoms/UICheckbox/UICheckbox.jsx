/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { getClassName } from 'utils';

import './UICheckbox.scss';

const NAME_SPACE = 'ui-checkbox';

const UICheckbox = (props) => {
  const {
    id, name, onChange, className, title, checked, disabled
  } = props;
  const componentClassName = getClassName(NAME_SPACE, className);

  return (
    <>
      <label className={componentClassName}>
        <input
          type="checkbox"
          name={name}
          id={id}
          className={`${NAME_SPACE}__input`}
          title={title}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <span className={`${NAME_SPACE}__checkmark`} />
      </label>
    </>
  );
};

UICheckbox.defaultProps = {
  className: '',
  title: '',
  onChange: null,
  name: 'ui-checkbox',
  id: '',
  checked: false,
  disabled: false,
};

UICheckbox.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

export { UICheckbox };
