import React, {Component} from "react";
import shortid from 'shortid';
import styled, {css} from "styled-components";
import Todos from './todos.json';
import FilterTodo from "./FilterTodo";
import TodoForm from './TodoForm';
import FlexContainer from "../FlexContainer/FlexContainer";


class TodoList extends Component {
    state = {
        todos: Todos,
        filter: '',
    }

    deleteTodo = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== id)
        }))
    }

    addTodo = text => {
        const todo = {
            id: shortid.generate(),
            text,
            completed: false
        }
        this.setState(({todos}) => ({
            todos: [todo, ...todos]
        }))
    }

    toggleComplited = (id) => {
        this.setState(({todos}) => ({
            todos: todos.map((todo) => todo.id === id ? {
                ...todo,
                completed: !todo.completed } : todo)
        }))
    }

    setFilterText = e => {
        this.setState({filter: e.currentTarget.value})
    }

    filterByName = () => {
        const {todos, filter} = this.state;
        const normalizedFilter = filter.toLowerCase();

        return todos.filter(({text}) => text.toLowerCase().includes(normalizedFilter));
    }

    completedTodosCount = (todos) => {
        return todos.reduce((total, todo) => todo.completed ? total + 1 : total, 0)
    }

    render(){
        const {todos, filter} = this.state;
        const completedTodo = this.completedTodosCount(todos);
        const filteredTodos = this.filterByName()

        return  (
        <Container direction="column" padding="10px">
            <TodoText>Total: {todos.length}</TodoText>
            <TodoText>Comleted: {completedTodo}</TodoText>

            <TodoForm onAddTodo={this.addTodo}/>

            <FilterTodo onChange={this.setFilterText} value={filter}/>
            <ul>
            {filteredTodos.map(({id, text, completed}) => (
                <Item key={id}>
                    <input
                    type="checkbox"
                    checked={completed}
                    onChange={()=>{this.toggleComplited(id)}}
                    />
                    <InputText>{text}</InputText>
                    <Button 
                    type="button"
                    onClick={()=>{this.deleteTodo(id)}}
                    >
                    delete
                    </Button>
                </Item>
            ))}
        </ul>
        </Container>
        ) 
    }
};

export default TodoList; 

const Container = styled(FlexContainer)`
    width: 550px;
    background: grey;
`;

const TodoText = styled.p`
    font-size: 22px;
    
`;

const Item = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    background: #D8E5DF;
    border: 1px solid grey;
    &:not(:last-child){
        margin-bottom: 10px;
    }
`;

const Input = styled.input.attrs({
    type: 'checkbox',
    completed: css`${props => props.completed}`,
})`
    width: 40px;
    height: 40px;
`;

const Button = styled.button.attrs({type: 'button'})`
    margin-left: auto;
`;

const InputText = styled.p`
  
`;
