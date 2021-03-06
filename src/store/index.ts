/* eslint-disable no-shadow */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { ls } from 'services';
import thunk from 'redux-thunk';

import { settings, api, accounts, expenses, incomes } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const rootReducer = combineReducers({
  settings,
  api,
  accounts,
  expenses,
  incomes,
});

const persistedState = ls.loadState();
const composeTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  persistedState,
  composeTools(applyMiddleware(thunk))
);
store.subscribe(() => {
  const { settings, accounts, expenses, incomes } = store.getState();
  ls.saveState({
    settings,
    accounts,
    expenses,
    incomes,
  });
});

export type TRootState = ReturnType<typeof rootReducer>;

export default store;
