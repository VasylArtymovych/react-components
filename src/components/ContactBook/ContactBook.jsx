import React, {Component} from "react";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { FilterField } from "./FilterField/FilterField";
import {Title} from './Title';

export class ContactBook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value,})
    }

    addContact = (newContact) => {
        const contactsNames = this.state.contacts.map(contact => contact.name);
        
        if(contactsNames.includes(newContact.name)){
            alert(`${newContact.name} is already in contacts`);
            return; 
        }else {
            this.setState(({contacts}) => ({
                contacts: [newContact, ...contacts],
            }));
        };
    }

    deleteContact = (id) => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== id)
        });
    }

    filterByName = () => {
        const {contacts, filter} = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }

    render(){
        const {filter} = this.state;
        const filteredContacts = this.filterByName();

        return (
            <div>
                <Title text='Phone Book'/>
                <ContactForm onSubmit={this.addContact}/>

                <Title text='Contacts'/>
                <FilterField value={filter} onChange={this.handleInputChange}/>
                <ContactList contacts={filteredContacts} deleteContact={this.deleteContact}/>
            </div>
        );
    }

};