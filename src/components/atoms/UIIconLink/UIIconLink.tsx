import { NavLink } from 'react-router-dom';

import { getClassName } from 'utils';

import './UIIconLink.scss';

type TUIIconLinkProps = {
  className?: string;
  to?: string;
  label?: string;
  title?: string;
  icon?: string;
  size?: 'small' | 'normal' | 'big';
};

const NAME_SPACE = 'ui-icon-link';

const UIIconLink = (props: TUIIconLinkProps) => {
  const {
    icon = 'cog',
    className = '',
    to = '/',
    label = 'Link',
    title = 'Title',
    size = 'normal',
  } = props;

  const classNames = getClassName(
    NAME_SPACE,
    `${NAME_SPACE}--${size}`,
    `icon-${icon}`,
    className
  );

  return (
    <NavLink to={to} className={classNames} title={title}>
      <span className={`${NAME_SPACE}__label`}>{label}</span>
    </NavLink>
  );
};

export { UIIconLink };
