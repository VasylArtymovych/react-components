import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../Button/Button';

export const TodoEditor = ({ onAddTodo }) => {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddTodo(message);
    setMessage('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledText value={message} name="text" onChange={handleChange} />

      <Button
        type="submit"
        width="100%"
        backgroundColor={props => props.theme.colors.secondary}
        color="white"
      >
        create
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled('textarea')`
  width: 350px;
  height: 75px;

  padding: ${p => p.theme.space[3]}px;
  resize: none;
`;
