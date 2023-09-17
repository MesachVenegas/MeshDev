import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './style.css'

function ProjectCard({ data }) {
    const language = useSelector(state => state.language);

    return (
        <motion.article className="project_item">
            <figure className="card">
                <img src={data.url} alt={data.title} title={data.title} />
                <figcaption>
                    <h3>{data.title}</h3>
                    <p>{language ? data.description_es : data.description_en}</p>
                    <div className="figure_foot">
                        <ul className='tech_stack'>
                            { data.techs.map( tech => (
                                <li key={data.title}>
                                    <img src={`./assets/${tech}.svg`} alt={tech} title={tech} />
                                </li>
                            ))
                            }
                        </ul>
                        <ul className='links'>
                            <li>
                                <a href={data.repository}>{language ? "Repositorio" : "Repository"}</a>
                            </li>
                            <li>
                                <a href={data.site}>{language ? "Pagina" : "Page"}</a>
                            </li>
                        </ul>
                    </div>
                </figcaption>
            </figure>
        </motion.article>
    );
}

export default ProjectCard;