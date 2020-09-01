import React from "react";
import './Todo.css'

const Todo = (props) => {
  return (
    <div className='everytodo' onClick={()=> props.toggleClicked(props.item.id)} className={`item${props.item.completed}`}>
        <p>
        {props.item.task}
        </p>
    </div>
  );
};

export default Todo;