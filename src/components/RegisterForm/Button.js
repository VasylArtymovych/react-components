import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button.attrs({ type: 'submit', disabled: true })` 
    width: ${({width}) => width || '100px'};
    height: ${({height}) => height || '25px'};
    border: ${({border}) => border || 'none'};
    color: ${({color}) => color || 'white'};
    background: ${({background}) => background || 'blue'};
    &:hover {
        cursor: pointer;
        background: grey;
        box-shadow: 0px 0px 7px white;
    }
`;

const Button = (props) => {
    return (
        <StyledButton {...props}/>
    );
}

export default Button;