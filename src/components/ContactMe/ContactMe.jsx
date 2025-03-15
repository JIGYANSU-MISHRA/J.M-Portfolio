import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section id="ContactMe"className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard
                iconUrl="src/Images/envelope.svg"
                text="jigyansumishra000@gmail.com"
                />
                <ContactInfoCard
                iconUrl="src/Images/Octicons-mark-github.svg"
                text="https://github.com/JIGYANSU-MISHRA"
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
