import { useState } from 'react';
import { GrEdit } from 'react-icons/gr';
import { IoTrashBin } from 'react-icons/io5';
import { useTodo } from '../Providers/TodoContext';

import {
  Input,
  Todos,
  Checkbox,
  DeleteButton,
  EditButton,
  AddButton,
} from '../common';

const Todo: React.FC<ITodo> = ({ title, id, completed }) => {
  const [todos, setTodos] = useTodo();
  const [editable, setEditable] = useState(false);
  const [editedInput, setEditedInput] = useState(title);

  const handleToggleClick = () => {
    todos.map((todo: ITodo) => {
      if (todo.id === id)
        return setTodos([...todos], (todo.completed = !todo.completed));
      return todo;
    });
  };

  const handleDelete = (id: string | number): void =>
    setTodos(todos.filter((todo: ITodo) => todo.id !== id));

  const editTodo = (id: number | string) => {
    todos.map((todo: ITodo) => {
      if (todo.id === id)
        return setTodos([...todos], (todo.title = editedInput));
      return todo;
    });
  };

  const handleEditSubmit = (e: React.FormEvent, id: string | number) => {
    e.preventDefault();
    editTodo(id);
    setEditable(!editable);
  };

  return (
    <Todos>
      <Checkbox
        type='checkbox'
        checked={completed}
        onChange={handleToggleClick}
      />
      {!editable ? (
        <h2>{title}</h2>
      ) : (
        <form onSubmit={(e) => handleEditSubmit(e, id)}>
          <Input
            onChange={(e: any) => setEditedInput(e.target.value)}
            value={editedInput}
            autoFocus
          />
          <AddButton type='submit'>Edit</AddButton>
        </form>
      )}
      <EditButton onClick={() => setEditable(!editable)}>
        <GrEdit />
      </EditButton>
      <DeleteButton onClick={() => handleDelete(id)}>
        <IoTrashBin />
      </DeleteButton>
    </Todos>
  );
};

export default Todo;
