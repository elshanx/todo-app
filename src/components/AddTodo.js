import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, AddButton } from '../common';
import { ADD_TODO } from '../redux/actionTypes';
import { v4 as uuid } from 'uuid';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = e => setInputValue(e.target.value);
  const dispatch = useDispatch();

  const addTodoOnSubmit = e => {
    e.preventDefault();
    if (!inputValue.trim().length > 0) return;
    dispatch({
      type: ADD_TODO,
      payload: { title: inputValue, id: uuid(), completed: false },
    });
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={addTodoOnSubmit}>
        <Input
          type='text'
          placeholder='add todo..'
          value={inputValue}
          onChange={handleInputChange}
          autoFocus
        />
        <AddButton disabled={!inputValue}>Add</AddButton>
      </form>
    </div>
  );
};

export default AddTodo;
