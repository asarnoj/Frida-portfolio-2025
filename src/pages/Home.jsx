import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/ProjectsData.js'; // Adjust the path as necessary
import Card from '../components/ProjectCard';
import './Home.css';

const Home = () => {
    const homeProjects = projects.filter((project) => project.home);

    return (
        <div className="home">
            <div className='h-projects'>
                {homeProjects.map((project) => (
                    <Link to={`/projects/${project.id}`} className="p-card-link">
                        <Card
                            title={project.title}
                            date={project.date}
                            medium={project.medium}
                            image={project.image}
                            size={'small'}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;