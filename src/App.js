import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: ['Asia', 'Kasia', 'Basia', 'Zosia', 'Stasia'],
        };
        this.state.filteredContacts = this.state.contacts;
    }

    render() {
        const { filteredContacts } = this.state;
        
        return (
            <div>
                <label className="c-filter">
                    <input type="search" className="c-filter__input" />
                </label>
                <ul className="c-contacts">
                    { filteredContacts.map(el => <li key={el} className="c-contact__item">{el}</li>) }
                </ul>
            </div>
        );
    }
}
