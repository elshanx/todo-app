import Todo from './Todo';
import { useTodo } from '../Providers/TodoContext';

const Todolist = () => {
  const [todos] = useTodo();

  return todos.map((todo: ITodo) => <Todo key={todo.id} {...todo} />);
};

export default Todolist;
