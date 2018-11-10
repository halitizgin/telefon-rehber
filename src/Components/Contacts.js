import React from 'react';
import List from './List';
import Form from './Form';
import PropTypes from 'prop-types';

const Contacts = props =>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <List contacts={props.contacts}/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <Form addContact={props.addContact}/>
            </div>
        </div>
    </div>;

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func
};

export default Contacts;