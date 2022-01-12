import { ADD_INCOME, UPDATE_INCOME, REMOVE_INCOME } from '../action-types';

const actionAddIncome = (data) => ({
  type: ADD_INCOME,
  payload: data,
});

const actionUpdateIncome = (id, data) => ({
  type: UPDATE_INCOME,
  payload: { id, data },
});

const actionRemoveIncome = (id) => ({ type: REMOVE_INCOME, payload: id });

export const addIncome = (data) => actionAddIncome(data);

export const updateIncome = (id, data) => actionUpdateIncome(id, data);

export const removeIncome = (id) => actionRemoveIncome(id);
