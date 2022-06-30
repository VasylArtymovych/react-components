// import { TodoItem } from "../TodoItem/TodoItem";
import styled, {css} from "styled-components";
import { Button } from "../../Button/Button";
import {RiDeleteBin6Line} from 'react-icons/ri';

export const TodoList = ({todos, onDeleteTodo,  onToggleCompleted}) => {

    return (
        <StyledList>
            {todos.map( ({id, text, completed}) => (
                <StyledItem key ={id}>
                    <input
                    type="checkbox"
                    checked={completed}
                    onChange={()=>{onToggleCompleted(id)}}
                    />
                    <StyledText checked={completed}>{text}</StyledText>
                    <Button onClick={()=>{onDeleteTodo(id)}}>
                        <RiDeleteBin6Line size={20} />
                    </Button>
                </StyledItem>
                // <TodoItem key={todo.id} todo={todo}  onDelete={onDeleteTodo} onToggle={onToggleCompleted}/> 
            ))}
        </StyledList>
    );
} 


const StyledList = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    margin-right: -10px;
`;


const StyledItem = styled('li')`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: calc(100%/3 - 10px);
    height: 50px;
    padding: 5px 10px;
    margin: 0 10px 10px 0;

    background-color: grey;
`;

const StyledText = styled('p')`
    ${p => {
        if(p.checked){
            return css`
            color: ${p.theme.colors.secondary};
            text-decoration: line-through;
            `
        }

        return css`
            color: ${p.theme.colors.text};
            text-decoration: none;
            `
    }};
`;