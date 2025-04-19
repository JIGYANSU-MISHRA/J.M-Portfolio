import 'react';
import PropTypes from 'prop-types';
import './ContactInfoCard.css';

const ContactInfoCard = ({ icon, text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="contact-link">
      <div className="contact-details-card">
          <div className="icon-1">
              {icon}
          </div>
          <p>{text}</p>
      </div>
    </a>
  );
};

ContactInfoCard.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ContactInfoCard;