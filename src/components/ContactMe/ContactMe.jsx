import 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <section id="ContactMe" className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-cards">
          <ContactInfoCard
            icon={<FontAwesomeIcon icon={faEnvelope} className="icon" />}
            text="Email (jigyansumishra000@gmail.com)"
            link="mailto:jigyansumishra000@gmail.com"
          />
          <ContactInfoCard
            icon={<FontAwesomeIcon icon={faLinkedin} className="icon" />}
            text="LinkedIn Profile"
            link="https://www.linkedin.com/in/jigyansu-mishra/"
          />
          <ContactInfoCard
            icon={<FontAwesomeIcon icon={faGithub} className="icon" />}
            text="GitHub Profile"
            link="https://github.com/JIGYANSU-MISHRA"
          />
          <ContactInfoCard
            icon={<FontAwesomeIcon icon={faTwitter} className="icon" />}
            text="Twitter Profile"
            link="https://x.com/Jigyansu_08"
          />
        </div>
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;