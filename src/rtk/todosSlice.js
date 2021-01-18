import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: uuid(),
      title: 'Learn React Redux',
      completed: true,
    },
    {
      id: uuid(),
      title: 'Learn Nodejs',
      completed: false,
    },
    {
      id: uuid(),
      title: 'Watch all Tarkovsky Movies',
      completed: true,
    },
    {
      id: uuid(),
      title: 'Read at least 30 books this year',
      completed: true,
    },
    {
      id: uuid(),
      title: 'Style this Application',
      completed: false,
    },
    {
      id: uuid(),
      title: 'Have one big project by the end of 2020',
      completed: false,
    },
  ],
  reducers: {
    create: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: ({ title }) => ({
        payload: {
          id: uuid(),
          title,
          completed: false,
        },
      }),
      // prepare is to keep the og function pure.
    },
    edit: (state, { payload }) => {
      const todo = state.find((todo) => todo.id === payload.id);
      todo.title = payload.title;
    },
    toggle: (state, { payload }) => {
      const todo = state.find((todo) => todo.id === payload);
      todo.completed = !todo.completed;
    },
    remove: (state, { payload }) => {
      const todo = state.findIndex((todo) => todo.id === payload);
      state.splice(todo, 1);
    },
  },
});

export const { create, toggle, remove, edit } = todosSlice.actions;

export default todosSlice.reducer;
