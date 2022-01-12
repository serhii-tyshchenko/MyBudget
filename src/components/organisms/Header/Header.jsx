import { ThemeToggler, LanguageSelector, Navigation } from 'components/molecules';

import { NAME_SPACE } from './constants';

import './Header.scss';

const Header = () => (
  <header className={NAME_SPACE}>
    <div className={`${NAME_SPACE}__content wrapper`}>
      <div className={`${NAME_SPACE}__left`}>
        <span className={`${NAME_SPACE}__logo`}>
          {process.env.REACT_APP_NAME}
        </span>
      </div>
      <div className={`${NAME_SPACE}__middle`}>
        <Navigation />
      </div>
      <div className={`${NAME_SPACE}__right`}>
        <LanguageSelector />
        <ThemeToggler />
      </div>
    </div>
  </header>
);

export { Header };
