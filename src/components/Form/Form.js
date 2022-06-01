import React, {Component} from "react";
import shortid from 'shortid';

class Form extends Component {
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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    />
                </label>
                <label htmlFor={this.telShortid}>tell</label>
                <input
                    id={this.telShortid}
                    type="tel"
                    name="tel"
                    value={tel}
                    onChange={this.handleChange}
                    />

                    <p>Your level:</p>
                    <label>
                        <input 
                        type="radio"
                        name="experience"
                        value="Junior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'Junior'}
                        />
                        Junior
                    </label>
                    <label>
                        <input 
                        type="radio"
                        name="experience"
                        value="Middle"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'Middle'}
                        />
                        Middle
                    </label>
                    <label>
                        <input 
                        type="radio"
                        name="experience"
                        value="Senior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'Senior'}
                        />
                        Senior   
                    </label>

                    <label>
                        <input
                        type="checkbox"
                        name="licence"
                        checked={licence}
                        onChange={this.handleLicence}
                        /> 
                        Agree with licence
                    </label>

                <button type="submit" disabled={!licence}>submit</button>
            </form>
        )
    }
}

export default Form;