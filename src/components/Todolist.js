import { useSelector } from 'react-redux';

import Todo from './Todo';

const Todolist = () => {
  const todos = useSelector((state) => state.todos);

  return todos.map((todo) => <Todo key={todo.id} {...todo} />);
};

export default Todolist;
