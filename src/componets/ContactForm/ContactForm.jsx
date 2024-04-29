import './ContactForm.css';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ContactForm({ onSubmit }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(50, 'Name must be at most 50 characters'),
    number: Yup.string().required('Number is required').min(3, 'Number must be at least 3 characters').max(15, 'Number must be at most 15 characters'),
  });

    return (
      <div className="contact-form">
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ dirty, isValid }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="number">Phone Number</label>
            <Field type="tel" id="number" name="number" />
            <ErrorMessage name="number" component="div" className="error" />
          </div>
          <button type="submit" disabled={!dirty || !isValid}>Add Contact</button>
        </Form>
      )}
            </Formik>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;