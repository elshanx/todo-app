import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos: todoReducer,
  filters: visibilityFilter,
});
