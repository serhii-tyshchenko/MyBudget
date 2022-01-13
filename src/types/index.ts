export type TTranslation = {
  [key: string]: { [key: string]: string };
};

export type TAccount = {
  id: string;
  name: string;
  currency: string;
  initialBalance: number;
  isHidden: boolean;
};

export type TIncome = {
  id: string;
  date: string;
  account: string;
  category: string;
  amount: number;
  note: string;
};

export type TExpense = {
  id: string;
  date: string;
  account: string;
  category: string;
  amount: number;
  note: string;
};

type TCurrency = {
  value: string;
  label: string;
  symbol: string;
};

export type TCurrencyList = Array<TCurrency>;
