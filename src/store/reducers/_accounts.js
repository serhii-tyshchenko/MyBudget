import { ADD_ACCOUNT, UPDATE_ACCOUNT, REMOVE_ACCOUNT } from '../action-types';
import { mockedAccounts } from 'mocks/accounts';

const initialState = mockedAccounts;

export const accounts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ACCOUNT:
      return [payload, ...state];

    case UPDATE_ACCOUNT:
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.data };
        }
        return item;
      });

    case REMOVE_ACCOUNT:
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};
