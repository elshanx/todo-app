import { useContext, useState } from 'react';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
import { Form, Input, AddButton } from './common';
import { TodoContext } from './TodoContext';

const SearchInput = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = id => {
    todos.filter(todo => {
      todo.id === id &&
        setTodos([...todos], (todo.completed = !todo.completed));
      return todo;
    });
  };

  const editTodo = (id, text) => {
    todos.map(todo => {
      if (todo.id === id)
        return setTodos([...todos], (todo.text = text));
      return todo;
    });
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleInputChange = e => setInputValue(e.target.value);

  const addTodoOnSubmit = e => {
    e.preventDefault();
    inputValue.trim().length > 0 &&
      setTodos([
        ...todos,
        { id: uuid(), text: inputValue, completed: false },
      ]);
    setInputValue('');
  };

  const todo = todos.map(t => (
    <Todo
      key={t.id}
      id={t.id}
      text={t.text}
      completed={t.completed}
      handleCheckboxChange={() => handleCheckboxChange(t.id)}
      editTodo={() => editTodo(t.id)}
      handleDelete={() => handleDelete(t.id)}
      inputValue={inputValue}
      setInputValue={setInputValue}
    />
  ));

  return (
    <>
      <Form onSubmit={addTodoOnSubmit}>
        <Input
          type='text'
          placeholder='add todo..'
          value={inputValue}
          onChange={handleInputChange}
          autoFocus
        />
        <AddButton disabled={!inputValue}>Add</AddButton>
      </Form>
      {todo}
    </>
  );
};

export default SearchInput;
