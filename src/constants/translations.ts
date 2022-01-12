type TTranslation = {
  [key: string]: { [key: string]: string };
};

export const translations: TTranslation = {
  en: {
    SIGN_IN: 'Sign In',
    ACCOUNTS: 'Accounts',
    EXPENSES: 'Expenses',
    INCOME: 'Income',
  },
  ua: {
    SIGN_IN: 'Увійти',
    ACCOUNTS: 'Гаманці',
    EXPENSES: 'Витрати',
    INCOME: 'Прибутки',
  },
  ru: {
    SIGN_IN: 'Войти',
    ACCOUNTS: 'Кошельки',
    EXPENSES: 'Расходы',
    INCOME: 'Доходы',
  },
};
