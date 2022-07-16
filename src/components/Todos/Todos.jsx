import shortid from 'shortid';
import { useState, useEffect } from 'react';
import { Statistic } from './Statistic/Statistic';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { TodoList } from './TodoList/TodoList';
import { Filter } from './Filter/Filter';
import { Box } from '../Box';
import { Title } from '../Title/Title';

const initialTodos = [
  { id: 'id-1', text: 'Learn React', completed: false },
  { id: 'id-2', text: 'Learn JavaScript', completed: false },
  { id: 'id-3', text: 'Learn HTML/Css/Scss', completed: false },
];

const parsedTodos = JSON.parse(localStorage.getItem('todos'));

const Todos = () => {
  const [todos, setTodos] = useState(() => parsedTodos ?? initialTodos);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const addTodo = text => {
    const newTodo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    setTodos(prevState => [newTodo, ...prevState]);
  };

  const deleteTodo = todoId => {
    setTodos(prevState => prevState.filter(({ id }) => id !== todoId));
  };

  const toggleCompleted = todoId => {
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
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
        Your Todos List
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
