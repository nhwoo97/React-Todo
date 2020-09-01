// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className='todo-list'>
      {props.todolist.map((item) => (
        <Todo key={item.id} item={item} toggleClicked={props.toggleClicked}/>
       
      ))}
      <button className='clear-btn' onClick={props.deleteTasks}>Delete Completed Tasks</button>
    </div>
  );
};

export default TodoList;
