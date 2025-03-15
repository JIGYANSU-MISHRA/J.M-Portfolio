// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

// Import images
import envelopeIcon from '../../assets/images/envelope.svg';
import githubIcon from '../../assets/images/Octicons-mark-github.svg';

const ContactMe = () => {
  return (
    <section id="ContactMe" className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={envelopeIcon}
            text="jigyansumishra000@gmail.com"
          />
          <ContactInfoCard
            iconUrl={githubIcon}
            text="https://github.com/JIGYANSU-MISHRA"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;