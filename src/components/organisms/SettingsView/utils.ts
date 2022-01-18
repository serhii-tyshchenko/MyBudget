import { TTranslation, TTheme } from 'types';
import { getValueByKey } from 'utils';

export const getThemeOptions = (themes: TTheme, STR: TTranslation) =>
  Object.keys(themes).map((theme) => ({
    value: themes[theme],
    label: getValueByKey(STR, theme),
  }));
