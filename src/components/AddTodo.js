import { useState } from 'react';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
import { Form, Input, AddButton } from './common';

const SearchInput = () => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      text: 'Learn React Redux',
      completed: true,
    },
    {
      id: uuid(),
      text: 'Learn Nodejs',
      completed: false,
    },
    {
      id: uuid(),
      text: 'Watch all Tarkovsky Movies',
      completed: true,
    },
    {
      id: uuid(),
      text: 'Read at least 30 books this year',
      completed: true,
    },
    {
      id: uuid(),
      text: 'Have one big project by the end of 2020',
      completed: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = id => {
    todos.map(todo => {
      if (todo.id === id)
        return setTodos(
          [...todos],
          (todo.completed = !todo.completed)
        );
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
      todos={todos}
      setTodos={setTodos}
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
