// import useLocalStorage from './hooks/useLocalStorage';

import { AppHeader, AppSubheader, AppBody } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';

const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log(contacts);
  console.log(filter);

  const searchContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // const addContact = contactInfo => {
  // const newContact = {
  //   ...contactInfo,
  //   id: nanoid(),
  // };
  // const checkDoublicate = contacts.some(contact => {
  //   return (
  //     contact.name.toLowerCase() === newContact.name.toLowerCase() ||
  //     contact.number === newContact.number
  //   );
  // });
  // return checkDoublicate
  //   ? alert(`${newContact.name} is already in contacts`)
  //   : setContacts(prevState => {
  //       return [...prevState, newContact];
  //     });
  // };

  // const filterInputing = e => {
  // setFilter(() => {
  //   return e.target.value;
  // });
  // };

  // const deleteContact = id => {
  // setContacts(prevState => {
  //   return prevState.filter(contact => contact.id !== id);
  // });
  // };

  return (
    <AppBody>
      <AppHeader>Phonebook</AppHeader>
      <ContactForm />
      <AppSubheader>Contacts</AppSubheader>
      <Filter />
      <ContactList filteredcontacts={searchContact()} />
    </AppBody>
  );
};

export default App;
