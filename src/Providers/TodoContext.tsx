import { useState, createContext, useContext } from 'react';

const TodoContext = createContext<any>(null);

export const TodoProvider: React.FC = ({ children }) => {
  const todos = useState<ITodo[]>([
    {
      id: 0,
      title: 'Learn React Redux',
      completed: true,
    },
    {
      id: 1,
      title: 'Learn Nodejs',
      completed: false,
    },
    {
      id: 2,
      title: 'Watch all Tarkovsky Movies',
      completed: true,
    },
    {
      id: 3,
      title: 'Read at least 30 books this year',
      completed: true,
    },
    {
      id: 4,
      title: 'Style this Application',
      completed: false,
    },
    {
      id: 5,
      title: 'Have one big project by the end of 2020',
      completed: false,
    },
  ]);

  return (
    <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
