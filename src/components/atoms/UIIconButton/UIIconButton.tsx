import { getClassName } from 'utils';

import './UIIconButton.scss';

interface UIIconButtonProps {
  onClick?: () => void;
  className?: string;
  icon?: string;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
}

const NAME_SPACE = 'ui-icon-button';

const UIIconButton = (props: UIIconButtonProps) => {
  const {
    icon = 'trash',
    onClick,
    className = '',
    title = 'Click me',
    type = 'button',
  } = props;
  const componentClassName = getClassName(
    NAME_SPACE,
    `icon-${icon}`,
    className
  );

  return (
    <button
      type={type}
      className={componentClassName}
      onClick={onClick}
      title={title}
    >
      <span className={`${NAME_SPACE}__text`}>{title}</span>
    </button>
  );
};

export { UIIconButton };
