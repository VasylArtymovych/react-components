import { Component } from "react";
import styled from "styled-components";
import { Button } from "../../Button/Button";

export class TodoEditor extends Component {
    state = {
        message: '',
    }

    handleChange = (e) => {
        this.setState({ message: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.onAddTodo(this.state.message);

        this.setState({
            message: '',
        }); 
    }

    render(){
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <StyledText
                value={this.state.message}
                name='text'
                onChange={this.handleChange}
                />

                <Button
                type='submit'
                width='100%'
                backgroundColor={props => props.theme.colors.secondary}
                color='white'
                >create
                </Button>
            </StyledForm>
        )
    }
};

const StyledForm = styled('form')`
    display: flex;
    flex-direction: column;
`;

const StyledText = styled('textarea')`
    width: 350px;
    height: 75px;

    padding: ${p => p.theme.space[3]}px;
    resize: none;
`;

