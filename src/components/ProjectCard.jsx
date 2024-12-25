import React from 'react';
import './ProjectCard.css';

const Card = ({ title, date, medium, image, size }) => {
    return (
        <div className={`p-card ${size}`}>
            <img src={image} alt={title} className='p-card-image' />
            <div className='p-card-overlay'>
                <p className='p-card-title'>{title}</p>
                <div className='p-card-info'>
                    <p className='p-card-date'>{date}</p>
                    <p className='p-card-medium'>{medium}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;