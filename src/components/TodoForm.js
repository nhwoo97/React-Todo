import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            item: ''
        }
    }

    handleChanges = (evt) => {
        this.setState({
            item: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addItem(this.state.item)
        this.setState({
            item:''
        })
    }

  render() {
    return (
        <form onSubmit = {this.handleSubmit}>
            <input
                type='text'
                name='todo'
                value={this.state.item}
                onChange={this.handleChanges}
            />
            <button>Add Todo</button>
        </form>
    )
  }
}

export default TodoForm;
