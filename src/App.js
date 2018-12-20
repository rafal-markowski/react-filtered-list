import React from 'react';
import './App.scss';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: ['Asia', 'Kasia', 'Basia', 'Zosia', 'Stasia'],
        };
        this.state.filteredContacts = this.state.contacts;
    }

    filterContacts = e => {
        const search = e.target.value.toLowerCase();
        const contacts = this.state.contacts;
        this.setState({
            filteredContacts: contacts.filter(el => el.toLowerCase().indexOf(search) === 0)   
        });
    }

    render() {
        const filteredContacts = this.state.filteredContacts;

        return (
            <div>
                <label className="c-filter">
                    Wyszukaj kontakt: 
                    <input type="search" className="c-filter__input" onInput={this.filterContacts} />
                </label>
                { this.contactList(filteredContacts) }                             
            </div>
        );
    }

    contactList(filteredContacts) {
        if(filteredContacts.length > 0) {
            return (
                <ul className="c-contacts">
                    { filteredContacts.map(el => <li key={el} className="c-contacts__item">{el}</li>) }
                </ul>
            )
        }
        return (<p>Nie znaleziono pasujących kontaktów</p>);
    }
}
