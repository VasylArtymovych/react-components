import { Button } from "../../Button/Button";
import {RiDeleteBin6Line} from 'react-icons/ri';
import styled, {css} from "styled-components";

export const Todo =({text, completed, onToggleCompleted, onDelete})=>{
    return(
        <>
            <input
                type="checkbox"
                checked={completed}
                onChange={onToggleCompleted}
            />
            <StyledText checked={completed}>{text}</StyledText>
            <Button onClick={onDelete}>
                <RiDeleteBin6Line size={20} color="inherit"/>
            </Button>
        </>
    )
}


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