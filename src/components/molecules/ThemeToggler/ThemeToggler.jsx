import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from 'store/actions';
import { UIIconButton } from 'components/atoms';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.settings);
  const btnIcon = theme === 'light' ? 'moon' : 'sun';

  const handleThemeChange = () => dispatch(updateSettings({ theme: theme === 'light' ? 'dark' : 'light' }))

  return (
    <UIIconButton
      icon={btnIcon}
      onClick={handleThemeChange}
      size="big"
    />
  );
};

export { ThemeToggler };
