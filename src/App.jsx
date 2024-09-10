
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { fetchContacts, addContact, deleteContact } from './redux/contactsOps';
import { selectFilteredContacts } from './redux/contactsSlice';
import { selectNameFilter } from './redux/filtersSlice';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const searchQuery = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSearchChange = (query) => {
    dispatch({ type: 'filters/setFilter', payload: query });
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={searchQuery} onChange={handleSearchChange} />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;
