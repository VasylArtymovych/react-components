import {BsYoutube} from 'react-icons/bs';
import styled from 'styled-components';
import {Box} from '../../Box';

export const AppBarLogo = ({text}) => {
    return (
    <Box display='flex' alignItems='center'> 
        < BsYoutube size='32'color='red'/>
        <StyledText>{text}</StyledText>
    </Box>
    );
};


const StyledText = styled.p`
    font-size: ${p => p.theme.fontSizes.l}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-left: ${p => p.theme.space[3]}px;
    font-family: ${p => p.theme.fonts.heading};
`;
