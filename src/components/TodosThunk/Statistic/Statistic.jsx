import styled from "styled-components";
import { Box } from "../../Box";

export const Statistic = ({total, completed})=>{
    return(
        <Box mb={15}>
            <StyledText>Total Todos: {total}</StyledText>
            <StyledText>Comleted Todos: {completed}</StyledText>
        </Box>
    )
}

const StyledText = styled('p')`
    margin: 0 0 5px 0;
    font-size: 18px;
    font-weight: 700;
    color: ${p => p.theme.colors.text}
`;
