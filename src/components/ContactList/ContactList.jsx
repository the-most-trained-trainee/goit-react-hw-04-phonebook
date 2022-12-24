import React from 'react';
import PropTypes from 'prop-types';
import ContactEntry from '../ContactEntry/ContactEntry';
import EntriesListStyled from './StyledEntriesList';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <EntriesListStyled>
      {contacts.map(contact => (
        <ContactEntry
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </EntriesListStyled>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
