import { StyledButton } from "./Button.styled"
export const Button = (props)=>{
    const {
    type='button',
    width,
    padding, 
    color, 
    backgroundColor, 
    display, 
    alignItem, 
    justifyContent,
    children} = props;

    return(
        <StyledButton 
        type={type} 
        padding={padding}
        color={color}
        backgroundColor={backgroundColor}
        display={display}
        alignItems={alignItem}
        justifyContent={justifyContent}
        width={width}
        >
            {children}
        </StyledButton>
    );
};