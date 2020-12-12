import React from 'react';
import icon from './icons/delete.svg';

function TodoItem({ item, handleChange, handleClick }) {
  return (
    <div className='todo-item'>
      <input
        onChange={() => handleChange(item.id)}
        type='checkbox'
        checked={item.completed}
      />
      <p className={item.completed ? 'completed' : null}>{item.text}</p>
      <button className='delete__todo' onClick={() => handleClick(item.id)}>
        <img className='delete-icon' src={icon} alt={icon} />
      </button>
    </div>
  );
}

export default TodoItem;
