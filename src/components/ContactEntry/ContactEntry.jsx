import React from 'react';
import PropTypes from 'prop-types';
import ContactEntryStyled from './StyledContactEntry';

const ContactEntry = ({ name, number, id, onDelete }) => {
  return (
    <ContactEntryStyled>
      <span>{name}: </span>
      <span>{number}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </ContactEntryStyled>
  );
};

ContactEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactEntry;
