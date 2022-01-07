import PropTypes from 'prop-types';
import { getClassName } from 'utils';
import { UIIconButton } from 'components/atoms';

import './UIDropdown.scss';

const NAME_SPACE = 'ui-dropdown';

const UIDropdown = ({
  children, onToggle, extraClassName, isOpened,
}) => {
  const menuTogglerIcon = isOpened ? 'cancel' : 'ellipsis-vert';
  const componentClassName = getClassName(NAME_SPACE, extraClassName);

  return (
    <div className={componentClassName}>
      <UIIconButton
        onClick={onToggle}
        icon={menuTogglerIcon}
        className={`${NAME_SPACE}__toggler`}
      />
      {isOpened && (
        <div className={`${NAME_SPACE}__container`}>
          {children}
        </div>
      )}
    </div>
  );
};

UIDropdown.defaultProps = {
  extraClassName: '',
  children: null,
};

UIDropdown.propTypes = {
  onToggle: PropTypes.func.isRequired,
  extraClassName: PropTypes.string,
  isOpened: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export { UIDropdown };
