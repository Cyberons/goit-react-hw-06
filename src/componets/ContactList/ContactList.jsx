import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDeleteContact={handleDeleteContact} />
      ))}
    </ul>
  );
}

export default ContactList;