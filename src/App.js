import React, { useState } from 'react';
import './index.css';
import TodoItem from './TodoItem';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React Redux',
      completed: true,
    },
    {
      id: 2,
      text: 'Learn Nodejs',
      completed: false,
    },
    {
      id: 3,
      text: 'Watch all Tarkovsky Movies',
      completed: true,
    },
    {
      id: 4,
      text: 'Read at least 30 books this year',
      completed: true,
    },
    {
      id: 5,
      text: 'Have one big project by the end of 2020',
      completed: false,
    },
  ]);

  const handleChange = id => {
    const prevState = todos.map(todo => todo);
    todos.map(todo => {
      if (todo.id === id)
        return setTodos(prevState, (todo.completed = !todo.completed));
      return todo;
    });
  };

  const handleClick = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='container'>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          completed={todo.completed}
          item={todo}
          handleClick={handleClick}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default App;
