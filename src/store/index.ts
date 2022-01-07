/* eslint-disable no-shadow */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { ls } from 'services';
import thunk from 'redux-thunk';

import { settings, api, accounts } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const rootReducer = combineReducers({
  settings,
  api,
  accounts,
});

const persistedState = ls.loadState();
const composeTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  persistedState,
  composeTools(applyMiddleware(thunk))
);
store.subscribe(() => {
  const { settings, accounts } = store.getState();
  ls.saveState({
    settings,
    accounts,
  });
});

export type TRootState = ReturnType<typeof rootReducer>;

export default store;
