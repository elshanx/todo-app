import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { Input, AddButton } from '../common';
import { addTodo } from '../redux/actions';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const addTodoOnSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim().length > 0) return;
    dispatch(addTodo(uuid(), inputValue));
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
