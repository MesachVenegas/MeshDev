import { useSelector } from 'react-redux';
import './style.css'

function ProjectCard({ data }) {
    const language = useSelector(state => state.language);

    return (
        <article className="project_item">
            <figure className="card">
                <img src={data.url} alt={data.title} title={data.title}/>
                <figcaption>
                    <h3>{data.title}</h3>
                    <p>{language ?  data.description_es : data.description_en}</p>
                </figcaption>
            </figure>
        </article>
    );
}

export default ProjectCard;