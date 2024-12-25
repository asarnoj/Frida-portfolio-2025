import React from 'react';
import { useParams } from 'react-router-dom';
import sketchbooks from '../data/SketchbooksData';
import './SketchbookPage.css';

const SketchbookPage = () => {
    const { id } = useParams(); // Extract the id from the URL

    // Find the sketchbook using the id (ensure id is treated as a string)
    const sketchbook = sketchbooks.find((sb) => sb.id === id); // Match id as a string

    if (!sketchbook) {
        return <h1>Sketchbook not found!</h1>;
    }

    return (
        <div>
            <div className='sbp-info'>
                <p>{sketchbook.title}</p>
                <p>{sketchbook.date}</p>
            </div>
            <div>
                {sketchbook.content && sketchbook.content.map((url, index) => (
                    <img className='sbp-content' key={index} src={url} alt={`Content ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default SketchbookPage;