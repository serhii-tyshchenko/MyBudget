import PropTypes from 'prop-types';

export const defaultProps = {
  className: '',
  onChange: null,
  onBlur: null,
  value: '',
  name: 'ui-textarea',
  placeholder: '',
  required: false,
  disabled: false,
};

export const propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};
