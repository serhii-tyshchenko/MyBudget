import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';

import { themes } from 'constants/index';

const mql = window.matchMedia('(prefers-color-scheme: dark)');

const getSystemTheme = (matches: boolean) =>
  matches ? themes.DARK : themes.LIGHT;

export const useTheme = () => {
  const { theme } = useSelector((state: TRootState) => state.settings);
  const [appTheme, setAppTheme] = useState(theme);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme(mql.matches));
  const onSystemThemeChange = (evt: { matches: boolean }) =>
    setSystemTheme(getSystemTheme(evt.matches));

  useEffect(
    () => setAppTheme(theme === themes.SYSTEM ? systemTheme : theme),
    [theme, systemTheme]
  );

  useEffect(() => {
    mql.addEventListener('change', onSystemThemeChange);
    return () => {
      mql.removeEventListener('change', onSystemThemeChange);
    };
  }, []);

  document.documentElement.setAttribute('data-theme', appTheme);
};
