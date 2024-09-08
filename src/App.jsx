
import './App.css';
import { useState, useEffect  } from 'react';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import contactsData from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [searchQuery, setSearchQuery] = useState('');

  const saveContactsToLocalStorage = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const loadContactsFromLocalStorage = () => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : contactsData;
  };
  useEffect(() => {
    const initialContacts = loadContactsFromLocalStorage();
    setContacts(initialContacts);
  }, []);

  useEffect(() => {
    saveContactsToLocalStorage(contacts);
  }, [contacts]);
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox value={searchQuery} onChange={handleSearchChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact}  />
      </div>
    </>
  );
}

export default App;
