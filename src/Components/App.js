import React, { Component } from 'react';
import '../Bootstrap/bootstrap.css';
import Contacts from './Contacts';

class App extends Component {
  state = {
    contacts: [
        {
            name: "Halit",
            phone: "507 618 5163"
        },
        {
            name: "Yasin AKSİPAHİ",
            phone: "507 459 6579"
        },
        {
            name: "Burak Gürsoy",
            phone: "507 325 6578"
        }
    ]
  };

  addContact = (contact) =>
  {
      const {contacts} = this.state;
      contacts.push(contact);
      this.setState({
        contacts
      });
  }

  render() {
    return (
        <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
    );
  }
}

export default App;
