import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ProjectCard';
import projectsData from '../data/ProjectsData'; // Import the array of projects
import './Projects.css';

const Projects = () => {
    const [selectedMedium, setSelectedMedium] = useState('');
    const [sortedProjects, setSortedProjects] = useState(projectsData);

    const handleSortChange = (event) => {
        const medium = event.target.value;
        setSelectedMedium(medium);
        if (medium) {
            // Filter projects by the selected medium
            const filteredProjects = projectsData.filter(project => project.medium === medium);
            setSortedProjects(filteredProjects);
        } else {
            // Show all projects if no medium is selected
            setSortedProjects(projectsData);
        }
    };

    // Get all unique mediums for the dropdown
    const mediums = Array.from(new Set(projectsData.map(project => project.medium)));

    return (
        <div>
            {/* Navbar with the sorting dropdown */}
            
                <select id="medium-select" value={selectedMedium} onChange={handleSortChange}>
                    <option value="">Filter after medium</option>
                    {mediums.map((medium, index) => (
                        <option key={index} value={medium}>{medium}</option>
                    ))}
                </select>

            {/* Projects cards */}
            <div className="p-cards">
                {sortedProjects.map((project, index) => (
                    <div key={index} className="p-card-container">
                        <Link to={`/projects/${project.id}`} className="p-card-link">
                            <Card className='h-card'
                                title={project.title}
                                date={project.date}
                                medium={project.medium}
                                image={project.image}
                                size='large'
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;