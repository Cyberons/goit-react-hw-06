import PropTypes from 'prop-types';
import './Contact.css';

export default function Contact({ contact, onDeleteContact }) {
  const { id, name, number } = contact;

  const handleDeleteClick = () => {
    onDeleteContact(id);
  };

  return (
    <li className="contact-item">
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
