import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED, EDIT_TODO } from './actionTypes';

export const addTodo = (id, title) => ({
  type: ADD_TODO,
  payload: { id, title },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_COMPLETED,
  payload: { id },
});

export const editTodo = (title, id) => ({
  type: EDIT_TODO,
  payload: { title, id },
});
