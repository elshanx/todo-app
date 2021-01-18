import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './rtk/todosSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
