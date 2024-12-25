import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/ProjectsData';
import './ProjectPage.css';

const ProjectPage = () => {
    const { id } = useParams(); // Extract the id from the URL

    // Find the project using the id (ensure id is treated as a string)
    const project = projects.find((p) => p.id === id); // Match id as a string

    if (!project) {
        return <h1>project not found!</h1>;
    }

    return (
        <div>
            <div className='pp-info'>
                <p>{project.title}</p>
                <p>{project.date}</p>
            </div>
            <img className='pp-content' src={project.image} alt="" />
        </div>
    );
};

export default ProjectPage;