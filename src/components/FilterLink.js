import { useDispatch } from 'react-redux';
import { SET_VISIBILITY_FILTER } from '../redux/actionTypes';

const FilterLink = ({ filter, children }) => {
  const dispatch = useDispatch();

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href='#'
      onClick={e => {
        e.preventDefault();
        dispatch({
          type: SET_VISIBILITY_FILTER,
          filter,
        });
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;
