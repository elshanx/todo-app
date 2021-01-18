import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Input, AddButton } from '../common';
import { useTodo } from '../Providers/TodoContext';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useTodo();

  const addTodoOnSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim().length > 0) return;
    const newTodo = { id: uuid(), title: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  return (
    <form onSubmit={addTodoOnSubmit}>
      <Input
        type='text'
        placeholder='add todo..'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
      <AddButton disabled={!inputValue}>Add</AddButton>
    </form>
  );
};

export default AddTodo;
