import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  EDIT_TODO,
  SET_VISIBILITY_FILTER,
} from './actionTypes';

export const addTodo = (id, title, completed) => ({
  type: ADD_TODO,
  payload: { id, title, completed },
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id },
});

export const toggleTodo = id => ({
  type: TOGGLE_COMPLETED,
  payload: { id },
});

export const editTodo = (title, id) => ({
  type: EDIT_TODO,
  payload: { title, id },
});

export const setFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter },
});
