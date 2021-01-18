import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input, AddButton } from '../common';
import { create } from '../rtk/todosSlice';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const addTodoOnSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim().length > 0) return;
    dispatch(create({ title: inputValue }));
    setInputValue('');
  };

  return (
    <div>
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
    </div>
  );
};

export default AddTodo;
