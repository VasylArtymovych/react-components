import { StyledTitle, StyledText } from "./VideoInfo.styled";
import { Box } from "../../Box";
import { ActionBar } from "../ActionBar";

export const VideoInfo = ({title, views, uploadDate})=>{
    return (
        <Box bg='background'
            pb='3'
            
        >
            <StyledTitle>{title}</StyledTitle>
            <Box
            display='flex'
            width={1}
            alignItems='end'
            >
                <StyledText marginRight='10'>{views} views </StyledText>
                <StyledText marginRight='100'>{uploadDate}</StyledText>
                <ActionBar />
            </Box>
        </Box>
    )
} 