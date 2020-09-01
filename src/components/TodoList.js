// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.todolist.map((item) => (
        <Todo key={item.id} item={item} toggleClicked={props.toggleClicked}>
        </Todo>
      ))}
      <button className='clear-btn' onClick={props.deleteTasks}>Delete Completed Tasks</button>
    </div>
  );
};

export default TodoList;
