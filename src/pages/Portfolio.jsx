import ProjectCard from '../components/Cards/ProjectCard';
import { projects } from "../utils/constants";
import { useSelector } from 'react-redux';

const Portfolio = () => {
    const language = useSelector( state => state.language);

    return (
        <>
            <div className='project_title'>
                <h1>{language ? "Proyectos" : "Portfolio"}</h1>
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