import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodoToList,
  deleteTodoFromList,
  toggleCompletedTodo,
  setFilterValue,
} from '../../redux/todos/todosSlice';
import { Statistic } from './Statistic/Statistic';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { TodoList } from './TodoList/TodoList';
import { Filter } from './Filter/Filter';
import { Box } from '../Box';
import { Title } from '../Title/Title';

const Todos = () => {
  const { todos, filter } = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilterValue(value));
  };

  const addTodo = text => {
    const newTodo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    dispatch(addTodoToList(newTodo));
  };

  const deleteTodo = todoId => {
    dispatch(deleteTodoFromList(todoId));
  };

  const toggleCompleted = todoId => {
    dispatch(toggleCompletedTodo(todoId));
  };

  const filterTodos = () => {
    const normalizeFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizeFilter)
    );
  };

  const completedTodos = todos.reduce((counter, todo) => {
    return todo.completed ? counter + 1 : counter;
  }, 0);
  const filteredTodos = filterTodos();

  return (
    <Box>
      <Title textAlign="center" margin="10px 0 20px 0">
        Your Todo List
      </Title>
      <Box display="flex" justifyContent="space-around">
        <TodoEditor onAddTodo={addTodo} />
        <Box mb={20}>
          <Statistic total={todos.length} completed={completedTodos} />
          <Filter onChange={handleChange} />
        </Box>
      </Box>

      <TodoList
        todos={filteredTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />
    </Box>
  );
};

export default Todos;
