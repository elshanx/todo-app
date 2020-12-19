import { GrEdit } from 'react-icons/gr';
import { IoTrashBin } from 'react-icons/io5';
import {
  Input,
  Text,
  Todos,
  Checkbox,
  DeleteButton,
  EditButton,
  AddButton,
  Form,
} from './common';
import { useState, useContext } from 'react';

import { TodoContext } from './TodoContext';

function TodoItem({
  id,
  title,
  completed,
  handleDelete,
  handleCheckboxChange,
}) {
  const [todos, setTodos] = useContext(TodoContext);
  const [editable, setEditable] = useState(false);
  const [editedInput, setEditedInput] = useState([title]);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    setEditedInput(e.target.value);
    todos.map(todo => {
      if (todo.id === id) {
        setTodos([...todos], (todo.title = editedInput));
        editedInput.length === 0 && handleDelete(todo);
        setEditedInput(editedInput);
      }
      return todo;
    });
    setEditable(!editable);
  };

  const handleEditClick = () => {
    setEditable(!editable);
  };

  return (
    <Todos>
      <Checkbox
        type='checkbox'
        onChange={handleCheckboxChange}
        checked={completed}
      />
      {editable ? (
        <Form onSubmit={e => handleSubmit(e, id, title)}>
          <Input
            completed={completed}
            editing={editable}
            onChange={e => setEditedInput(e.target.value)}
            value={editedInput}
            placeholder={editedInput}
            autoFocus // because I am a kind person :)
          />
          <AddButton>Edit</AddButton>
        </Form>
      ) : (
        <Text completed={completed}>{title}</Text>
      )}
      <EditButton onClick={handleEditClick}>
        <GrEdit />
      </EditButton>
      <DeleteButton onClick={handleDelete}>
        <IoTrashBin />
      </DeleteButton>
    </Todos>
  );
}

export default TodoItem;
