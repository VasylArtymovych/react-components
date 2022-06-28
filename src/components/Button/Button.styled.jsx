import styled from "styled-components";

export const StyledButton = styled.button`
    display: ${p => p.display || 'box'};
    align-items: ${p => p.alignItems || 'stretch'};
    justify-content: ${p => p.justifyContent || 'stretch'};

    width: ${p => p.width || '3rem'};
    height: ${p => p.height || 'auto'};
    padding: ${p => p.padding || p.theme.space[3]}px;
    font-size: ${p => p.fontSize || p.theme.fontSizes.s}px;
    border: ${p => p.border || 'none'};
    outline: ${p => p.outline || 'none'};
    border-radius: ${p => p.borderRadius || p.theme.radii.normal};
    background-color: ${p => p.backgroundColor || 'transparent'};
    color: ${p => p.color || p.theme.text};

`;