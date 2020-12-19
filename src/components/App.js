import '../index.css';
import AddTodo from './AddTodo';
import { Container } from './common';
import SourceCode from './SourceCode';
import { TodoProvider } from './TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <SourceCode />
      <Container>
        <AddTodo />
      </Container>
    </TodoProvider>
  );
};

export default App;
