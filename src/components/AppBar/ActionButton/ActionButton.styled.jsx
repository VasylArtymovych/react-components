import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    gap: ${prop => prop.theme.space[2]}px;

    padding: ${prop => prop.theme.space[1]}px;
    margin-right: ${prop => prop.theme.space[4]}px;

    border: ${prop => prop.theme.borders.none};
    border-radius: ${prop => prop.theme.radii.normal};
    color: ${prop => prop.theme.colors.white};
    background-color: ${prop => prop.disabled ? prop.theme.colors.muted: prop.theme.colors.background};
    cursor: pointer;

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
        background-color: ${prop => prop.theme.colors.accent};
    };
`;