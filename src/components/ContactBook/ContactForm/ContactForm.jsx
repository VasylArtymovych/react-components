import React, {Component} from "react";
const shortid = require('shortid');

const initialState = {
    name: '',
    number: '',
}

export class ContactForm extends Component {
    state = {
        ...initialState,
    };

    inputNameId = shortid.generate();
    inputTellId = shortid.generate();

    inputHandler = (e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        const {name, number} = this.state;
        const contact = {id: shortid.generate(), name, number};

        this.props.onSubmit(contact)
        this.resetForm();
    }

    resetForm = () => {
        this.setState({...initialState});
    }


    render(){
        
        const {name, number} = this.state;
        return(
            <form onSubmit={this.submitHandler}>
                <label htmlFor={this.inputNameId}>Full name</label>
                <input
                    id={this.inputNameId}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.inputHandler}
                />
                <label htmlFor={this.inputTellId}>Phone number</label>
                <input
                    id={this.inputTellId}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.inputHandler}
                />
                <button type="submit">add</button>
            </form>
            
        )
    }
};