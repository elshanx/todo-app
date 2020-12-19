import '../index.css';
import AddTodo from './AddTodo';
import { Container } from './common';
import SourceCode from './SourceCode';
import { TodoProvider } from './TodoContext';

const App = () => {
  return (
    <>
      <SourceCode />
      <Container>
        <TodoProvider>
          <AddTodo />
        </TodoProvider>
      </Container>
    </>
  );
};

export default App;
