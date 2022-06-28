import {BiSearchAlt} from 'react-icons/bi';
import { Button } from "../../Button/Button";
import { StyledInput, StyledForm } from "./AppBarSearchBox.styled";

export const AppBarSearchBox = ()=>{
    return (
        <StyledForm>
            <StyledInput />
            <Button 
                type="submit" 
                width='50px'
                padding='4'
                color='white'
                backgroundColor='#000' 
                display='flex' 
                alignItems='center'
                justifyContent='center'
            >
                <BiSearchAlt size='24'/>
            </Button>
        </StyledForm>
    );
};