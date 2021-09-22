import React, { useRef } from "react";

const Task = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      // here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className='btns'>
        <button onClick={() => changeFocus()}>Edit</button>
        <button onClick={() => props.completeTodos(item.id)}>Completed</button>

        <button onClick={() => props.removeTodo(item.id)}>Delete</button>
      </div>

      {item.completed && <span className='completed'>done</span>}
    </li>

  );
};

export default Task;
