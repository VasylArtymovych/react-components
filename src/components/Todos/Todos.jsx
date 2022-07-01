import shortid from 'shortid';
import {Component} from 'react';
import { Statistic } from './Statistic/Statistic';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { TodoList } from './TodoList/TodoList';
import { Filter } from './Filter/Filter';
import { Box } from '../Box';
import { Title } from '../Title/Title';

const initialTodos = [
    {id: 'id-1', text: 'Learn React', completed: false},
    {id: 'id-2', text: 'Learn JavaScript', completed: false},
    {id: 'id-3', text: 'Learn HTML/Css/Scss', completed: false},
];

export class Todos extends Component {
    state = {
        todos: initialTodos,
        filter: '',
    }

    componentDidMount(){
        const todos =  localStorage.getItem('todos');
        const parsedTodos = JSON.parse(todos);

        if(parsedTodos) {
            this.setState({todos: parsedTodos});
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.todos !== prevState.todos){
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        }
    }

    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    }

    addTodo = (text) => {
        const newTodo = {
            id: shortid.generate(),
            text,
            completed: false,
        };
        this.setState(({todos}) => ({
            todos: [newTodo, ...todos],
        }));
    }

    deleteTodo = todoId => { 
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== todoId)
        }))
    }

    toggleCompleted = (todoId) => {
        this.setState(({todos}) => ({
            todos: todos.map(todo => 
                todo.id === todoId 
                ? {...todo, completed: !todo.completed} : todo,
            ),
        }));
    }

    filterTodos = ()=>{
        const {todos, filter} = this.state;
        const normalizeFilter = filter.toLowerCase();
        return todos.filter(todo => todo.text.toLowerCase().includes(normalizeFilter));
    }

    render(){
        const {todos} = this.state;
        const totalTodos = todos.length;
        const completedTodos = todos.reduce((counter, todo) => {
            return todo.completed ? counter + 1 : counter;
        }, 0);

        const filteredTodos = this.filterTodos();

        return(
            <Box >
                <Title
                textAlign='center'
                margin='10px 0 20px 0'
                >
                    Your Todos List 
                </Title>
                <Box display='flex' justifyContent='space-around'> 
                    <TodoEditor onAddTodo={this.addTodo}/>
                    <Box mb={20}>
                        <Statistic 
                            total={totalTodos} 
                            completed={completedTodos}
                        />
                        <Filter onChange={this.handleChange}/>
                    </Box>
                </Box>
                
            
                <TodoList 
                todos={filteredTodos} 
                onDeleteTodo={this.deleteTodo} 
                onToggleCompleted={this.toggleCompleted}/>
            </Box>
            
        )
    }
}