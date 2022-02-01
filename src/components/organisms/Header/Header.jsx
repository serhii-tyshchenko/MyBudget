import { Navigation, SettingsModal } from 'components/molecules';
import { UIIconButton } from 'components/atoms';
import { NavLink } from 'react-router-dom';
import { useModalState } from 'hooks';

import { NAME_SPACE } from './constants';

import './Header.scss';

const Header = () => {

  const { isOpen, openModal, closeModal } = useModalState();

  return (
    <>
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
            <UIIconButton icon="cog" title="Open settings" onClick={openModal} size="big" />
          </div>
        </div>
      </header>
      <SettingsModal isVisible={isOpen} onClose={closeModal} />
    </>
  )
};

export { Header };
