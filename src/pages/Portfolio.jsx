import React from 'react';
import ProjectCard from './../components/ProjectCard';

const Portfolio = () => {
    return (
        <section className='container_section' id='portfolio'>
            <h1>Portfolio</h1>
            <p>Let's show my work</p>
            <div className='project_container'>
                <ProjectCard tittle={"Pokedex App"} preview_site={'/images/Pokedex_preview.png'}/>
                <ProjectCard tittle={"E-commerce"} />
            </div>
        </section>
    );
};

export default Portfolio;