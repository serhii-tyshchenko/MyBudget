import { UPDATE_SETTINGS } from 'store/action-types';
import { expenseCategories, incomeCategories } from 'mocks/categories';

const initialState = {
  language: 'en',
  theme: 'light',
  categories: {
    expenses: expenseCategories,
    incomes: incomeCategories,
  },
};

export const settings = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_SETTINGS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
