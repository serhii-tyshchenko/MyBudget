type TCurrency = {
  value: string;
  label: string;
  symbol: string;
};

type TCurrencyList = Array<TCurrency>;

export const currencies: TCurrencyList = [
  { value: 'uah', label: 'UAH', symbol: '₴' },
  { value: 'usd', label: 'USD', symbol: '$' },
  { value: 'eur', label: 'EUR', symbol: '€' },
];
