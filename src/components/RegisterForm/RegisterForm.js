import React, {Component} from "react";
import shortid from 'shortid';
import FlexContainer from "../FlexContainer/FlexContainer";
import {StyledForm, StyledLabel, StyledInput, RadioLabel, RadioInput, RadioText, StyledButton} from './RegisterForm.styled';
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

