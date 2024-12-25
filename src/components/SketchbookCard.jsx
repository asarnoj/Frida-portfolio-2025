import React from 'react';
import './SketchbookCard.css';

const Card = ({ title, date, cover}) => {
    return (
        <div className="sb-card">
            <img src={cover} alt={title} className="sb-card-cover" />
            <div className="sb-card-overlay">
                <p className="sb-card-title">{title}</p>
                <p className="sb-card-date">{date}</p>
            </div>
        </div>
    );
};

export default Card;