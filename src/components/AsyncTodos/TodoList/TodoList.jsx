import styled from 'styled-components';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <StyledList>
      {todos.map(({ id, text, completed }) => (
        <StyledItem key={id} cheked={completed}>
          <Todo
            id={id}
            text={text}
            completed={completed}
            onDelete={onDeleteTodo}
          />
        </StyledItem>
      ))}
    </StyledList>
  );
};

const StyledList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-right: -10px;
`;

const StyledItem = styled('li')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% / 3 - 10px);
  height: 50px;
  padding: 5px 10px;
  margin: 0 10px 10px 0;

  background-color: grey;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;

    background-color: ${p => p.theme.colors.effects};

    transform: ${p => (p.cheked ? 'scaleX(1)' : 'scaleX(0) ')};
    transition: transform 250ms linear;
  }
`;
