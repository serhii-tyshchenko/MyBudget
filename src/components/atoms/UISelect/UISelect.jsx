import PropTypes from 'prop-types';
import { getClassName } from 'utils';

import './UISelect.scss';

const NAME_SPACE = 'ui-select';

const UISelect = (props) => {
  const {
    value, onChange, options, className, title, required, name,
  } = props;
  const componentClassName = getClassName(NAME_SPACE, className);

  return (
    <select
      name={name}
      onChange={onChange}
      value={value}
      required={required}
      className={componentClassName}
      title={title}
    >
      {options.map(({ value, disabled, label }) => (
        <option
          key={value}
          value={value}
          disabled={disabled}
          className={`${NAME_SPACE}__option`}
        >
          {label}
        </option>
      ))}
    </select>
  );
};

UISelect.defaultProps = {
  className: '',
  onChange: null,
  value: '',
  name: 'ui-select',
  title: 'Select me',
  options: [
    {
      value: 'opt1',
      label: 'Option 1',
    },
    {
      value: 'opt2',
      label: 'Option 2',
    },
    {
      value: 'opt3',
      label: 'Option 3',
    },
  ],
  required: false,
};

UISelect.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ),
  required: PropTypes.bool,
};

export { UISelect };
