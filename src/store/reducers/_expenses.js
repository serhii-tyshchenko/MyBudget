import { ADD_EXPENSE, UPDATE_EXPENSE, REMOVE_EXPENSE } from '../action-types';

const initialState = [];

export const expenses = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EXPENSE:
      return [payload, ...state];

    case UPDATE_EXPENSE:
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.data };
        }
        return item;
      });

    case REMOVE_EXPENSE:
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};
