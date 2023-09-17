import React from 'react';
import ProjectCard from '../components/Cards/ProjectCard';
import { projects } from "../utils/constants";

const Portfolio = () => {


    return (
        <>
            <div className='project_title'>
                <h1>Portfolio</h1>
                <p>Let's show my work</p>
            </div>
            <div className='project_container'>
                {projects.map(project => (
                    <ProjectCard key={project.title} data={project} />
                ))

                }
            </div>
        </>
    );
};

export default Portfolio;