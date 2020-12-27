import { SET_FILTER } from '../actionTypes';

const initialState = {
  filters: {
    status: 'All',
  },
};

const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          status: payload,
        },
      };
    default:
      return state;
  }
};

export default filtersReducer;
