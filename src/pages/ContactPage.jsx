// This is ContactPage that just serves as a page link purpose, not implementing specific components.
import { useState } from 'react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    setSubmitted(true); // Set state to true to show confirmation message
  };

  return (
    <div className='main col-sm-12'>
      <h1 className='section-title'>Contact Us</h1>

      {!submitted ? (
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='subject'>Subject:</label>
              <input
                type='text'
                className='form-control'
                id='subject'
                name='subject'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message:</label>
              <textarea
                className='form-control'
                id='message'
                name='message'
                rows='5'
                required></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>
              Send Message
            </button>
          </form>
        </div>
      ) : (
        <div className='confirmation-message'>
          <h2>Thank you for contacting us!</h2>
          <p>We have received your message and will get back to you shortly.</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
