import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container/StyledContainer';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      const localContacts = JSON.parse(localStorage.getItem('contacts'));
      setContacts(localContacts);
    }
  }, []);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const localContactsStringified = JSON.stringify(contacts);
    localStorage.setItem('contacts', localContactsStringified);
  }, [contacts]);

  const contactSearch = request => {
    setFilter(request);
  };

  const getFilteredContacts = () => {
    let result = [];
    if (filter === '') {
      result = contacts;
    } else {
      result = contacts.filter(contact =>
        contact.name.toUpperCase().includes(filter.toUpperCase())
      );
    }
    return result;
  };

  const contactSubmit = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const onDelete = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={contactSubmit} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter onSearch={contactSearch} />
      <ContactList onDelete={onDelete} contacts={getFilteredContacts()} />
    </Container>
  );
};

export default App;
