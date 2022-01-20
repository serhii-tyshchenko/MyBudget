import { getClassName } from 'utils';

import './UIButton.scss';

interface IUIButtonProps {
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  btnType?: 'primary' | 'secondary' | 'action';
  size?: 'small' | 'normal' | 'large';
  text: string;
  disabled?: boolean;
}

const NAME_SPACE = 'ui-button';

const UIButton = (props: IUIButtonProps) => {
  const {
    onClick,
    className = '',
    type = 'button',
    btnType = 'primary',
    size = 'normal',
    text = 'Button',
    disabled = false,
  }: IUIButtonProps = props;
  const componentClassName = getClassName(
    NAME_SPACE,
    `${NAME_SPACE}--${btnType}`,
    `${NAME_SPACE}--${size}`,
    className
  );

  return (
    <button
      type={type}
      className={componentClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export { UIButton };
