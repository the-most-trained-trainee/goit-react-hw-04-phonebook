import React from 'react';
import PropTypes from 'prop-types';
import StyledForm from './StyledContactForm';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { contacts } = this.props;
    const { name } = this.state;

    if (!contacts.some(entry => entry.name === name)) {
      this.props.onSubmit({ name: this.state.name, number: this.state.number });
      this.setState({
        name: '',
        number: '',
      });
    } else {
      alert(name + ' is already in contacts.');
    }
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <StyledForm>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="">Phone</label>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </StyledForm>
      </form>
    );
  }
}

export default ContactForm;
