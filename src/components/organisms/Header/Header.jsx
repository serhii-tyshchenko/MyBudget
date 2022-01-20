import { Navigation } from 'components/molecules';
import { UIIconLink } from 'components/atoms';
import { NavLink } from 'react-router-dom';

import { NAME_SPACE } from './constants';

import './Header.scss';

const Header = () => (
  <header className={NAME_SPACE}>
    <div className={`${NAME_SPACE}__content wrapper`}>
      <div className={`${NAME_SPACE}__left`}>
        <NavLink to="/" className={`${NAME_SPACE}__logo`}>
          {process.env.REACT_APP_NAME}
        </NavLink>
      </div>
      <div className={`${NAME_SPACE}__middle`}>
        <Navigation />
      </div>
      <div className={`${NAME_SPACE}__right`}>
        <UIIconLink to="/settings" size="big" title="Go to settings" />
      </div>
    </div>
  </header >
);

export { Header };
