import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number cannot exceed 50 characters')
    .required('required'),
});

const ContactForm = () => {
  const dispatch = useDispatch(); //  хук dispatch

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact)); //  екшен у Redux
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" className={css.formFild} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="number">Number</label>
          <Field type="text" id="number" name="number" className={css.formFild} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
