import styled from "styled-components";

export const Title = (props) => (
    <StyledTitle {...props}/>
)

const StyledTitle = styled('h2')`
    font-size: ${p => p.fontSize || p.theme.fontSizes.l}px;
    font-weight: ${p => p.fontWeight || p.theme.normal};
    color: ${p => p.color || p.theme.colors.text};
    text-align: ${p => p.textAlign || 'start'};
    margin: ${p => p.margin || '0 0 0 0'};
`;