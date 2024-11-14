import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

export const Contact = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    emailjs
    .sendForm('service_x4b2xqi', 'template_r1t8tuo', form.current, {
        publicKey: 'QwPkadmai5TpriMie',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form">
        <h2>Contact Us</h2>
      {formSubmitted ? (
        <p>Thank you for your message! We will get back to you soon.</p>
      ) : (
    <form ref={form} onSubmit={sendEmail}>
<div className="form-group">
      <label>Name</label>
      <input type="text" name="from_name" required/>
</div>
<div className="form-group">
      <label>Email</label>
      <input type="email" name="from_email" required />
</div>
<div className="form-group">
<label htmlFor="message">Message</label>
      <textarea name="message" placeholder="Your message" required/>
</div>

<button type="submit">Submit</button>
    </form>
      )}
    </div>
  );
};
export default Contact;