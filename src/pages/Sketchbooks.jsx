import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/SketchbookCard'; // Assuming you have a Card component for individual sketchbook details
import sketchbooks from '../data/SketchbooksData'; // Import the array of sketchbooks
import './Sketchbooks.css';

const Sketchbooks = () => (
    <div className="sb-cards">
        {sketchbooks.map((sketchbook, index) => (
            <div key={index} className="sb-card-container">
                <Link to={`/sketchbooks/${sketchbook.id}`} className="sb-card-link">
                    <Card
                        title={sketchbook.title}
                        date={sketchbook.date}
                        cover={sketchbook.cover}
                    />
                </Link>
            </div>
        ))}
    </div>
);

export default Sketchbooks;