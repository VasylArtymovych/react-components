import { StyledButton } from "./ActionButton.styled"
export const ActionButton = ({type='button', children, disabled})=>{
    return(
        <StyledButton type={type} disabled={disabled}>{children}</StyledButton>
    )
}