import { TTranslation, TTheme } from 'types';
import { getValueByKey } from 'utils';

export const getThemeOptions = (themes: Array<TTheme>, STR: TTranslation) =>
  themes.map(({ value, label }) => ({
    value,
    label: getValueByKey(STR, label.toUpperCase()),
  }));
