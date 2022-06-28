import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledInput = styled.input.attrs(props => ({
    type: 'text',
    name: 'query',
    placeholder: 'search',
}))`
    width: 250px;
    height: 25px;
    padding-left: 4px;
    border: 1px solid;
    border-color: ${p => p.theme.colors.muted};
    outline: none;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.black};

    &::placeholder {
    }
`;

