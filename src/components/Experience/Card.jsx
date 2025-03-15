import React from 'react';

const Card = (props) => {
    return (
        <div className="timeline_item">
            <div className={`timeline_icon ${props.icon}`} aria-hidden="true"></div>
            <span className="timeline_date">{props.year}</span>
            <h3 className="timeline_title">{props.title}</h3>
            <p className="timeline_text">{props.desc}</p>
        </div>
    );
};

export default Card;
