import { TCurrencyList, TTheme } from 'types';

export const currencies: TCurrencyList = [
  { value: 'uah', label: 'UAH', symbol: '₴' },
  { value: 'usd', label: 'USD', symbol: '$' },
  { value: 'eur', label: 'EUR', symbol: '€' },
];

export const languages: Array<{ value: string; label: string }> = [
  { value: 'en', label: 'English' },
  { value: 'ua', label: 'Українська' },
  { value: 'ru', label: 'Русский' },
];

export const themes: Array<TTheme> = [
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
];
