import { useState, createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const todos = useState([
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

  return (
    <TodoContext.Provider value={todos}>
      {children}
    </TodoContext.Provider>
  );
};
