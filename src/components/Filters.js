import { useDispatch, useSelector } from 'react-redux';
import { SET_FILTER } from '../redux/actionTypes';

const Filters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.filters)

  return (
    <div>
      <button
        onClick={() => dispatch({ type: SET_FILTER, payload: 'All' })}
      >
        All
      </button>
      <button
        onClick={() =>
          dispatch({ type: SET_FILTER, payload: 'Completed' })
        }
      >
        Completed
      </button>
      <button
        onClick={() =>
          dispatch({ type: SET_FILTER, payload: 'Uncompleted' })
        }
      >
        Uncompleted
      </button>
    </div>
  );
};

export default Filters;
