import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  todos: todoReducer,
  filters: filtersReducer,
});
