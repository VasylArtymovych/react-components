
import React, {Component} from "react";

class TodoForm extends Component {
    state ={
        message: ''
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const {message} = this.state;
        this.props.onAddTodo(message);
        this.setState({message: ''})

    }

    render(){
    
        return (
            <form onSubmit={this.handleSubmit}>
                <label>add todo in Todolist</label>
                <input
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                />
                <button type="submit">add</button>
            </form>
        )
    }
}

export default TodoForm;