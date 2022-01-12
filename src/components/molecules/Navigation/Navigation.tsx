import { useContext, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Localization } from 'contexts';

import { NAME_SPACE } from './constants';
import { getLinkClassName } from './utils';

import './Navigation.scss';

const Navigation = () => {
  const STR = useContext(Localization);

  return (
    <nav className={NAME_SPACE}>
      <NavLink to="/" className={getLinkClassName}>
        {STR.ACCOUNTS}
      </NavLink>
      <NavLink to="/expenses" className={getLinkClassName}>
        {STR.EXPENSES}
      </NavLink>
      <NavLink to="/incomes" className={getLinkClassName}>
        {STR.INCOME}
      </NavLink>
    </nav>
  );
};

export default memo(Navigation);
