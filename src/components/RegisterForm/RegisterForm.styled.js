import styled, {css} from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 450px;
    padding: 10px;
    background: grey;
`;

export const StyledLabel = styled.label`
    font-size: 16px;
    margin-bottom: 15px;
`;

export const StyledInput = styled.input.attrs((props) => ({
    type: props.type || "text",
}))`
    width: 100%;
    height: 28px;
    font-size: 1em;
    border-radius: 5px;
    margin-top: 10px;
    padding: ${({padding}) => padding};
`;

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const RadioInput = styled.input.attrs({type: 'radio'})``;

export const RadioText = styled.span`
    ${(props) => {
        switch (props.mode) {
            case 'dark': 
            return css`
                color: blue;
                ${RadioInput}:checked + && {
                    color: red;
                }
            `;
        default: 
            return css`
                color: black;
                ${RadioInput}:checked + && {
                    color: blue;
                }
            `;    
        }
    }
}
`;
export const StyledButton = styled.button.attrs(props => ({
    type: "submit",
    // disabled:  props.disabled || false,
    disabled: true,
}))`
width: 100px;
height: 25px;
border: none;
color: white;
background: green;
&:hover,
&:focus {
    cursor: pointer;
    background: grey;
    box-shadow: 0px 0px 7px white;
}
`;