import React from 'react';

class List extends React.Component {
    state = {
        filter: ''
    }

    onChangeFilter = (e) =>
    {
        this.setState({
            filter: e.target.value
        });
    }

    render() {
        const filteredContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
            }
        );
        return (
            <div>
                <input className="form-control" value={this.state.filter} onChange={this.onChangeFilter} type="text" name="filter" id="filter" placeholder="Aranacak kelimeyi giriniz"/>
                <br/>
                <ul className="list-group">
                    {
                        filteredContacts.map(contact => 
                            <li className="list-group-item" key={contact.phone}>
                                <span className="float-left">{contact.name}</span>
                                <span className="float-right">{contact.phone}</span>
                            </li>
                        )
                    }
                </ul>
                <br/>
            </div>
        );
    }
}

export default List;