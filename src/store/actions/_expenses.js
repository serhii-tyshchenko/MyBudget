import { ADD_EXPENSE, UPDATE_EXPENSE, REMOVE_EXPENSE } from '../action-types';

const actionAddExpense = (data) => ({
  type: ADD_EXPENSE,
  payload: data,
});

const actionUpdateExpense = (id, data) => ({
  type: UPDATE_EXPENSE,
  payload: { id, data },
});

const actionRemoveExpense = (id) => ({ type: REMOVE_EXPENSE, payload: id });

export const addExpense = (data) => actionAddExpense(data);

export const updateExpense = (id, data) => actionUpdateExpense(id, data);

export const removeExpense = (id) => actionRemoveExpense(id);
