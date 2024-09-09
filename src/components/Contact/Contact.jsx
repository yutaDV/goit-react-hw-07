import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => { // Переконайся, що тут є id
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id)); // Використовуй правильний id для видалення
  };

  return (
    <div className={css.contact}>
      <p>{name}: {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
