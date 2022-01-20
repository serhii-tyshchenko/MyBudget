import { getClassName } from 'utils';

import './UIIconButton.scss';

type TUIIconButtonProps = {
  onClick?: () => void;
  className?: string;
  icon?: string;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  size?: 'small' | 'normal' | 'big';
};

const NAME_SPACE = 'ui-icon-button';

const UIIconButton = (props: TUIIconButtonProps) => {
  const {
    icon = 'trash',
    onClick,
    className = '',
    title = 'Click me',
    type = 'button',
    size = 'normal',
  } = props;
  const componentClassName = getClassName(
    NAME_SPACE,
    `${NAME_SPACE}--${size}`,
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
