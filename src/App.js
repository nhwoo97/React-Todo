import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const dummyData = [];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={
      todo:dummyData,
    }
  }

  toggleClicked = (clickedItemId) => {

    this.setState({
      todo: this.state.todo.map((item) => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  deleteTasks = () => {
    this.setState({
      todo: this.state.todo.filter(task => task.completed === false)})
  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addItem={this.addItem}
        />
        <TodoList todolist={this.state.todo} toggleClicked={this.toggleClicked} deleteTasks={this.deleteTasks}/>
      </div>
    );
  }
}

export default App;
