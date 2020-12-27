import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  EDIT_TODO,
} from '../actionTypes';

const initialState = {
  todos: [
    {
      id: 0,
      title: 'Learn React Redux',
      completed: true,
    },
    {
      id: 1,
      title: 'Learn Nodejs',
      completed: false,
    },
    {
      id: 2,
      title: 'Watch all Tarkovsky Movies',
      completed: true,
    },
    {
      id: 3,
      title: 'Read at least 30 books this year',
      completed: true,
    },
    {
      id: 4,
      title: 'Style this Application',
      completed: false,
    },
    {
      id: 5,
      title: 'Have one big project by the end of 2020',
      completed: false,
    },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: payload.id,
            title: payload.title,
            completed: false,
          },
        ],
      };
    }
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => {
            if (todo.id !== payload) return todo;
            return {
              ...todo,
              completed: !todo.completed,
            };
          }),
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => {
            return todo.id !== payload;
          }),
        ],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => {
            if (todo.id === payload.id) {
              return {
                ...todo,
                title: payload.title,
              };
            }
            return todo;
          }),
        ],
      };
    default:
      return state;
  }
};

export default todoReducer;
