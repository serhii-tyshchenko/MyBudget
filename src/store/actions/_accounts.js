import { ADD_ACCOUNT, UPDATE_ACCOUNT, REMOVE_ACCOUNT } from '../action-types';

const actionAddAccount = (data) => ({
  type: ADD_ACCOUNT,
  payload: data,
});

const actionUpdateAccount = (id, data) => ({
  type: UPDATE_ACCOUNT,
  payload: { id, data },
});

const actionRemoveAccount = (id) => ({ type: REMOVE_ACCOUNT, payload: id });

export const addAccount = (data) => actionAddAccount(data);

export const updateAccount = (id, data) => actionUpdateAccount(id, data);

export const removeAccount = (id) => actionRemoveAccount(id);
