import React, {Component} from "react";
import s from './TodoList.module.css';
import Todos from './todos.json';
import FilterTodo from "../FilterTodo";
import TodoForm from '../TodoForm';
import shortid from 'shortid';

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
        <div>
            <p>Total: {todos.length}</p>
            <p>Comleted: {completedTodo}</p>
            <TodoForm onAddTodo={this.addTodo}/>
            <FilterTodo onChange={this.setFilterText} value={filter}/>
            <ul>
            {filteredTodos.map(({id, text, completed}) => (
                <li key={id}>
                    <input
                    type="checkbox"
                    checked={completed}
                    onChange={()=>{this.toggleComplited(id)}}
                    />
                    <p>{text}</p>
                    <button 
                    type="button"
                    onClick={()=>{this.deleteTodo(id)}}
                    >
                    delete
                    </button>
                </li>
            ))}
        </ul>
        </div>
        ) 
    }
}
// const TodoList = ({todos, onDeleteTodo})=> (
//     <ul>
//         {todos.map(({id, text, complited}) => (
//             <li key={id}>
//                 <input
//                 type="checkbox"
//                 checked={complited}
//                 onChange={()=>{}}
//                 />
//                 <p>{text}</p>
//                 <button 
//                 type="button"
//                 onClick={()=>{onDeleteTodo(id)}}
//                 >
//                 delete
//                 </button>
//             </li>
//         ))}
//     </ul>
// )

export default TodoList; 