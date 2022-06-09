import React, {Component} from "react";
import shortid from 'shortid';
import styled, {css} from 'styled-components';
import FlexContainer from "./FlexContainer";
// import Button from "./Button";

export default class Form extends Component {
    state = {
        name: '',
        tel: '',
        experience: 'Junior',
        licence: false,
    }

    telShortid = shortid.generate();

    handleChange = event => {
        const {name, value} = event.target;
        this.setState(() => ({
            [name]: value,
        }))
    }

    reset = () => {
        this.setState({name: '', tel: ''})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.reset();
    }

    handleLicence = (event) => {
        this.setState({licence: event.currentTarget.checked})
        // this.setState((prevState) => ({
        //     licence: !prevState.licence
        // }))
    }    
    
    render(){
        const {name, tel, licence} = this.state;

        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <StyledLabel>
                    Name
                    <StyledInput
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    
                    />
                </StyledLabel>

                <StyledLabel>
                    tell
                    <StyledInput
                    type="tel"
                    name="tel"
                    value={tel}
                    onChange={this.handleChange}
                    />
                </StyledLabel>

                    <p>Your level:</p>
                    <FlexContainer justify='space-around' margin='5px 0 20px 0'>
                    <RadioLabel>
                        <RadioInput 
                        type="radio"
                        name="experience"
                        value="Junior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'Junior'}
                        />
                        <RadioText>Junior</RadioText>
                    </RadioLabel>

                    <RadioLabel>
                        <RadioInput 
                        type="radio"
                        name="experience"
                        value="Middle"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'Middle'}
                        />
                        <RadioText>Middle</RadioText>
                    </RadioLabel>

                    <RadioLabel>
                        <RadioInput 
                        type="radio"
                        name="experience"
                        value="Senior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'Senior'}
                        />
                        <RadioText>Senior</RadioText>
                    </RadioLabel>
                    </FlexContainer>
                    
                    <label>
                        <input
                        type="checkbox"
                        name="licence"
                        checked={licence}
                        onChange={this.handleLicence}
                        /> 
                        Agree with licence
                    </label>
                <FlexContainer justify='center' align='center' margin='10px 0 0 0'>
                    <StyledButton disabled={!licence}>submit</StyledButton>
                </FlexContainer>
            </StyledForm>
        )
    }
};

// styled components 
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 450px;
    padding: 10px;
    background: grey;
`;

const StyledLabel = styled.label`
    font-size: 16px;
    margin-bottom: 15px;
`;

const StyledInput = styled.input.attrs((props) => ({
    type: props.type || "text",
}))`
    width: 100%;
    height: 28px;
    font-size: 1em;
    border-radius: 5px;
    margin-top: 10px;
    padding: ${({padding}) => padding}
`;

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;

`;
const RadioInput = styled.input.attrs({type: 'radio'})``;

const RadioText = styled.span`
    ${(props) => {
        switch (props.mode) {
            case 'dark': 
            return css`
                color: blue;
                ${RadioInput}:checked + && {
                    color: red;
                }
            `;
        default: 
            return css`
                color: black;
                ${RadioInput}:checked + && {
                    color: blue;
                }
            `;    
        }
    }
}
`;
const StyledButton = styled.button.attrs(props => ({
    type: "submit",
    // disabled:  props.disabled || false,
    disabled: true,
}))`
width: 100px;
height: 25px;
border: none;
color: white;
background: green;
&:hover,
&:focus {
    cursor: pointer;
    background: grey;
    box-shadow: 0px 0px 7px white;
}
`;