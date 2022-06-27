import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
    color: ${(props)=>props.color};
    text-align: center;
    font-size: 24px;
    margin: 10px auto;

`;


const Title = (props) => {
    return (
        <StyledTitle {...props}/>
    )
}

export default Title;

