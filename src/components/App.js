import '../index.css';
import { Container } from '../common';
import AddTodo from './AddTodo';
import Todolist from './Todolist';

const App = () => (
  <Container>
    <AddTodo />
    <Todolist />
  </Container>
);

export default App;
