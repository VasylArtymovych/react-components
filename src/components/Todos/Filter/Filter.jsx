import styled from "styled-components";
import shortid from "shortid";

export const Filter = ({value, onChange})=>{
    const inputId = shortid.generate()
    return(
        <>
        <StyledLabel htmlFor={inputId}>
            Filter by Text: 
            </StyledLabel>
        <StyledInput
            id={inputId}
            type='text'
            name='filter'
            value={value}
            onChange={onChange}
        />
        </>
    );
}



const StyledInput = styled('input')`
    width: 200px;
    height: 30px;
    border: ${p => p.theme.borders.bold};
    border-color: ${p => p.theme.colors.secondary};
    outline: none;
`;

const StyledLabel = styled('label')`
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.text};
    margin-right: ${p => p.theme.space[3]}px;
`;