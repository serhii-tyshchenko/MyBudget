import { UPDATE_SETTINGS } from 'store/action-types';

const initialState = {
  language: 'en',
  theme: 'light',
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
