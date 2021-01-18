import '../index.css';
import { Container } from '../common';
import AddTodo from './AddTodo';
import Todolist from './Todolist';
import { TodoProvider } from '../Providers/TodoContext';

const App = () => (
  <TodoProvider>
    <Container>
      <AddTodo />
      <Todolist />
    </Container>
  </TodoProvider>
);

export default App;
