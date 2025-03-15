// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ icon, year, title, desc }) => {
    return (
        <div className="timeline_item">
            <div className={`timeline_icon ${icon}`} aria-hidden="true"></div>
            <span className="timeline_date">{year}</span>
            <h3 className="timeline_title">{title}</h3>
            <p className="timeline_text">{desc}</p>
        </div>
    );
};

Card.propTypes = {
    icon: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default Card;