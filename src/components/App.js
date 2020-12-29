import '../index.css';
import { Container } from '../common';
import AddTodo from './AddTodo';
import Todolist from './Todolist';
import FilterLink from './FilterLink';

const App = () => {
  return (
    <Container>
      <AddTodo />
      <Todolist />
      <h3>
        Show: <FilterLink filter='SHOW_ALL'>All</FilterLink>{' '}
        <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>{' '}
        <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
      </h3>
    </Container>
  );
};

export default App;
