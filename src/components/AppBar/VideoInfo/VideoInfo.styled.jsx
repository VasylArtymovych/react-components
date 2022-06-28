import styled from "styled-components";

export const StyledTitle = styled.h2`

    font-style: 24px;
    color: ${p => p.color || p.theme.colors.primary};

`;

export const StyledText = styled.p`
    margin-right: ${p => p.marginRight || p.theme.space[2]}px;
    color: ${p => p.color || p.theme.colors.primary};

`;