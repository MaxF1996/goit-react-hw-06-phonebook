import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

import {
  ContactListUl,
  ContactListItem,
  ContactItemDeleteBtn,
} from './ContactList.styled';

import PropTypes from 'prop-types';

const ContactList = ({ filteredContacts }) => {
  const dispatch = useDispatch();

  return (
    <ContactListUl>
      {filteredContacts.map(contact => {
        return (
          <ContactListItem key={contact.id}>
            {contact.name}: {contact.number}
            <ContactItemDeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </ContactItemDeleteBtn>
          </ContactListItem>
        );
      })}
    </ContactListUl>
  );
};

ContactList.propTypes = {
  filteredcontacts: PropTypes.array.isRequired,
};

export default ContactList;
