import { SET_VISIBILITY_FILTER } from '../actionTypes';

const initialState = {
  filters: ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'],
};

const visibilityFilter = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return { payload };
    default:
      return state;
  }
};

export default visibilityFilter;
