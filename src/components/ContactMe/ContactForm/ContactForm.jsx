import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-content">
        <form>
            <div className="name-container">
                <input type="text" name="firstname" placeholder="Enter First Name" />
                <input type="text" name="lastname" placeholder="Enter Last Name" />
            </div>
            <input type="text" name="email" placeholder="Enter Email" />
            <textarea type="text" name="message" placeholder="Message" row={3}></textarea>
            <button>SEND</button>

        </form>
    </div>
  )
}

export default ContactForm
