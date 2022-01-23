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

export type TCategory = {
  id: string;
  name: string;
};

export type TRecord = {
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

type TLanguage = {
  value: string;
  label: string;
};

export type TTheme = {
  [key: string]: string;
};

export type TCurrencyList = Array<TCurrency>;
export type TLanguageList = Array<TLanguage>;
