import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todolist = () => {
  const { todos } = useSelector(state => state.todos);

  return todos.map(t => (
    <Todo
      key={t.id}
      id={t.id}
      title={t.title}
      completed={t.completed}
    />
  ));
};

export default Todolist;
