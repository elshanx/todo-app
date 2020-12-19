import { useContext, useState, useEffect } from 'react';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
import { Form, Input, AddButton } from './common';
import { TodoContext } from './TodoContext';
import axios from 'axios';

const SearchInput = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/'
      );
      setTodos(data);
    };
    fetchData();
  }, [setTodos]);

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
        return setTodos([...todos], (todo.title = text));
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
        { id: uuid(), title: inputValue, completed: false },
      ]);
    setInputValue('');
  };

  const todo = todos.map(t => (
    <Todo
      key={t.id}
      id={t.id}
      title={t.title}
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
