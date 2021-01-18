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
import { toggle, remove, edit } from '../rtk/todosSlice';

const Todo = ({ title, id, completed }) => {
  const [editable, setEditable] = useState(false);
  const [editedInput, setEditedInput] = useState([title]);
  const dispatch = useDispatch();

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(edit({ title: editedInput, id }));
    setEditable(!editable);
  };

  return (
    <Todos>
      <Checkbox
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggle(id))}
      />
      {!editable ? (
        <h2>{title}</h2>
      ) : (
        <form onSubmit={(e) => handleEditSubmit(e, id)}>
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
      <DeleteButton onClick={() => dispatch(remove(id))}>
        <IoTrashBin />
      </DeleteButton>
    </Todos>
  );
};

export default Todo;
