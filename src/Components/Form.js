import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
    state = 
    {
        name: '',
        phone: ''
    }

    static propTypes = 
    {
        addContact: PropTypes.func
    }

    onChange = (e) =>
    {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) =>
    {
        e.preventDefault();
        this.props.addContact({...this.state});
        this.setState({
            name: '',
            phone: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input className="form-control" type="text" name="name" onChange={this.onChange} value={this.state.name} id="name" placeholder="İsim"/>
                    <input className="form-control" type="text" name="phone" onChange={this.onChange} value={this.state.phone} id="phone" placeholder="Telefon"/>
                    <button className="btn btn-primary">Ekle</button>
                </form>
            </div>
        );
    }
}

export default Form;