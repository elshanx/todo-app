import '../index.css';
import AddTodo from './AddTodo';
import { Container } from './common';
import SourceCode from './SourceCode';

const App = () => {
  return (
    <>
      <SourceCode />
      <Container>
        <AddTodo />
      </Container>
    </>
  );
};

export default App;
