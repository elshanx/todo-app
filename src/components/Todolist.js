import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todolist = () => {
  const { todos } = useSelector(state => state.todos);
  const { filters } = useSelector(state => state.filters);

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  };

  const visibleTodos = getVisibleTodos(todos, filters);

  return visibleTodos.map(t => (
    <Todo
      key={t.id}
      id={t.id}
      title={t.title}
      completed={t.completed}
    />
  ));
};

export default Todolist;
