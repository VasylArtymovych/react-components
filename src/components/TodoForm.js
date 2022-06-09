import React, {Component} from "react";
import styled from "styled-components";

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
            <Form onSubmit={this.handleSubmit}>
                <label>add todo in Todolist:</label>
                <Input
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                />
                <button type="submit">add</button>
            </Form>
        )
    }
}

export default TodoForm;

//styled components

const Form = styled.form`
    display: flex;
    // justify-content: space-between;
    width: 100%;
    padding: 10px;
    background: grey;
`;

const Input = styled.input.attrs({
    type: "text",
})`
    width: 50%;
`;