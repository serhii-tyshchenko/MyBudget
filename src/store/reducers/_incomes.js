import { ADD_INCOME, UPDATE_INCOME, REMOVE_INCOME } from '../action-types';

const initialState = [];

export const incomes = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_INCOME:
      return [payload, ...state];

    case UPDATE_INCOME:
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.data };
        }
        return item;
      });

    case REMOVE_INCOME:
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};
