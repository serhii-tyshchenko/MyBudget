import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocalization } from 'hooks';

import { routes } from 'constants/index';

import { NAME_SPACE } from './constants';
import { getLinkClassName } from './utils';

import './Navigation.scss';

const Navigation = () => {
  const STR = useLocalization();

  return (
    <nav className={NAME_SPACE}>
      <NavLink to={routes.HOME_PAGE} className={getLinkClassName}>
        {STR.ACCOUNTS}
      </NavLink>
      <NavLink to={routes.EXPENSES} className={getLinkClassName}>
        {STR.EXPENSES}
      </NavLink>
      <NavLink to={routes.INCOMES} className={getLinkClassName}>
        {STR.INCOME}
      </NavLink>
    </nav>
  );
};

export default memo(Navigation);
