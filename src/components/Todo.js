import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GrEdit } from 'react-icons/gr';
import { IoTrashBin } from 'react-icons/io5';

import {
  Input,
  Todos,
  Checkbox,
  DeleteButton,
  EditButton,
  AddButton,
} from '../common';
import { deleteTodo, editTodo, toggleTodo } from '../redux/actions';

const Todo = ({ title, id, completed }) => {
  const [editable, setEditable] = useState(false);
  const [editedInput, setEditedInput] = useState([title]);
  const dispatch = useDispatch();

  const handleToggleClick = () => dispatch(toggleTodo(id));
  const handleDelete = () => dispatch(deleteTodo(id));

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo(editedInput, id));
    setEditable(!editable);
  };

  return (
    <Todos>
      <Checkbox type='checkbox' checked={completed} onChange={handleToggleClick} />
      {!editable ? (
        <h2>{title}</h2>
      ) : (
        <form onSubmit={handleEditSubmit}>
          <Input
            completed={completed}
            editing={editable}
            onChange={(e) => setEditedInput(e.target.value)}
            value={editedInput}
            autoFocus
          />
          <AddButton type='submit'>Edit</AddButton>
        </form>
      )}
      <EditButton onClick={() => setEditable(!editable)}>
        <GrEdit />
      </EditButton>
      <DeleteButton onClick={handleDelete}>
        <IoTrashBin />
      </DeleteButton>
    </Todos>
  );
};

export default Todo;
