import { Button } from '../../Button/Button';
import { RiDeleteBin6Line } from 'react-icons/ri';
import styled, { css } from 'styled-components';

export const Todo = ({ id, text, completed, onToggleCompleted, onDelete }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          onToggleCompleted(id);
        }}
      />
      <StyledText checked={completed}>{text}</StyledText>
      <Button
        onClick={() => {
          onDelete(id);
        }}
      >
        <RiDeleteBin6Line size={20} color="inherit" />
      </Button>
    </>
  );
};

const StyledText = styled('p')`
  ${p => {
    if (p.checked) {
      return css`
        color: ${p.theme.colors.secondary};
        text-decoration: line-through;
      `;
    }

    return css`
      color: ${p.theme.colors.text};
      text-decoration: none;
    `;
  }};
`;
