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
        <svg
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={`${NAME_SPACE}__logo`}
        >
          <g stroke="#000" strokeWidth="6">
            <rect
              fill="none"
              x="14"
              y="14"
              width="100"
              height="102.5"
              rx="17"
            />
            <circle fill="none" cx="86.188" cy="77.125" r="8" />
            <rect
              rx="2"
              height="4"
              width="61.875"
              y="37.625"
              x="50.25"
              fill="none"
            />
          </g>
        </svg>
        {STR.ACCOUNTS}
      </NavLink>
      <NavLink to={routes.EXPENSES} className={getLinkClassName}>
        <svg
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={`${NAME_SPACE}__logo`}
        >
          <rect
            stroke="#000"
            strokeWidth="6"
            fill="none"
            x="14"
            y="56.184"
            width="100"
            height="60"
            rx="17"
          />
          <circle
            fill="none"
            stroke="#000"
            cx="64"
            cy="86.184"
            strokeWidth="6"
            r="9.168"
          />
          <g stroke="#000" fill="none" strokeWidth="4">
            <rect
              x="50.956"
              y="16.622"
              width="2"
              height="18"
              rx="2"
              transform="rotate(45 72.297 17.13) scale(1.24736)"
            />
            <rect x="62.753" y="14.016" width="2.495" height="31.184" rx="2" />
            <rect
              x="71.378"
              y="12.956"
              width="2"
              height="18"
              rx="2"
              transform="rotate(-45 74.767 47.544) scale(1.24736)"
            />
          </g>
        </svg>
        {STR.EXPENSES}
      </NavLink>
      <NavLink to={routes.INCOMES} className={getLinkClassName}>
        <svg
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={`${NAME_SPACE}__logo`}
        >
          <rect
            stroke="#000"
            strokeWidth="6"
            fill="none"
            x="14"
            y="56.184"
            width="100"
            height="60"
            rx="17"
          />
          <circle
            fill="none"
            stroke="#000"
            cx="64"
            cy="86.184"
            strokeWidth="6"
            r="9.168"
          />
          <g
            transform="rotate(180 64 29.35)"
            stroke="#000"
            fill="none"
            strokeWidth="4"
          >
            <rect
              x="50.956"
              y="16.622"
              width="2"
              height="18"
              rx="2"
              transform="rotate(45 72.297 17.13) scale(1.24736)"
            />
            <rect x="62.753" y="14.016" width="2.495" height="31.184" rx="2" />
            <rect
              x="71.378"
              y="12.956"
              width="2"
              height="18"
              rx="2"
              transform="rotate(-45 74.767 47.544) scale(1.24736)"
            />
          </g>
        </svg>
        {STR.INCOME}
      </NavLink>
    </nav>
  );
};

export default memo(Navigation);
