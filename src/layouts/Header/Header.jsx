import { ThemeToggler, LanguageSelector } from 'components/molecules';

import { NAME_SPACE } from './constants';

import './Header.scss';

const Header = () => (
  <header className={NAME_SPACE}>
    <div className={`${NAME_SPACE}__content wrapper`}>
      <span className={`${NAME_SPACE}__logo`}>
        {process.env.REACT_APP_NAME}
      </span>
      <div className={`${NAME_SPACE}__middle`}>
      </div>
      <div className={`${NAME_SPACE}__right`}>
        <LanguageSelector />
        <ThemeToggler />
      </div>
    </div>
  </header>
);

export { Header };
