import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/todos/asyncTodosActions';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
} from '../../redux/todos/asyncTodosOperations';
import { Statistic } from './Statistic/Statistic';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { TodoList } from './TodoList/TodoList';
import { Filter } from './Filter/Filter';
import { Box } from '../Box';
import { Title } from '../Title/Title';
console.log(
  JSON.stringify([
    {
      id: 1,
      name: 'Роберт Шекли',
    },
    {
      id: 2,
      name: 'Кристофер Фаулер',
    },
    {
      id: 3,
      name: 'Говард Лавкрафт',
    },
    {
      id: 4,
      name: 'Вячеслав Шалыгин',
    },
  ])
);

const Todos = () => {
  const { todos, filter } = useSelector(state => state.asyncTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  const addTodoHandler = text => {
    dispatch(addTodo(text));
  };

  const deleteTodoHandler = todoId => {
    dispatch(deleteTodo(todoId));
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
        <TodoEditor onAddTodo={addTodoHandler} />
        <Box mb={20}>
          <Statistic total={todos.length} completed={completedTodos} />
          <Filter onChange={handleChange} />
        </Box>
      </Box>

      <TodoList todos={filteredTodos} onDeleteTodo={deleteTodoHandler} />
    </Box>
  );
};

export default Todos;
