import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './portfolio.css';

function Portfolio() {
    return (
        <section className='container_section'>
            <h2 className='section_title'>Portfolio</h2>
            <div className="projects_container">
                <ProjectCard />
            </div>
        </section>
    );
}

export default Portfolio;