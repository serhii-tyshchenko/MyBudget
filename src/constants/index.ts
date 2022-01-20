import { TTheme, TCurrencyList, TLanguageList } from 'types';

export const currencies: TCurrencyList = [
  { value: 'uah', label: 'UAH', symbol: '₴' },
  { value: 'usd', label: 'USD', symbol: '$' },
  { value: 'eur', label: 'EUR', symbol: '€' },
];

export const languages: TLanguageList = [
  { value: 'en', label: 'English' },
  { value: 'ua', label: 'Українська' },
  { value: 'ru', label: 'Русский' },
];

export const routes = {
  HOME_PAGE: '/',
  EXPENSES: '/expenses',
  INCOMES: '/incomes',
  SETTINGS: '/settings',
};

export const themes: TTheme = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
};
