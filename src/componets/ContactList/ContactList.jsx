import './ContactList.css';
import Contact from '../Contact/Contact.jsx';
import PropTypes from 'prop-types';


function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.array.isRequired,
};

export default ContactList;