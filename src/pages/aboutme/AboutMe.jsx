import { useSelector } from 'react-redux';
import './about.css';

const AboutMe = () => {
    const language = useSelector(state => state.language);

    return (
        <>
            <div className="title">
                <h2>{language ? "Sobre mi" : "About me"}</h2>
            </div>
            <div className="container">
                <figure className='fig_avatar'>
                    <div className="avatar">
                        <img src="/images/me.jpg" alt="avatar_img"/>
                    </div>
                    <figcaption className='fig_avatar'>
                        <ul className='social'>
                            <li className='social_item'>
                                <a className='social_link' href="#">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>
                            <li className='social_item'>
                                <a className='social_link' href="#">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li className='social_item'>
                                <a className='social_link' href="#">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                            </li>
                        </ul>
                        <a className='btn btn-fig' href='#contact'>{ language ? "Contactarme" : "Contact me"}</a>
                    </figcaption>
                </figure>
                <div className="text_container">
                    <p>
                        {
                            language ? "¡Hola! Soy Mesach Venegas, un apasionado desarrollador Full Stack autodidacta con una firme convicción de aprendizaje continuo. A lo largo de mi viaje, he perfeccionado mis habilidades mediante la participación activa en bootcamps, donde he consolidado mi conocimiento técnico y he adquirido una perspectiva integral del desarrollo web. Mi amor por la tecnología y la programación me ha llevado a participar en proyectos reales, donde he tenido la oportunidad de aplicar y expandir mis habilidades. Esta experiencia práctica me ha permitido enfrentar desafíos del mundo real y encontrar soluciones creativas y eficientes." : "Hello! I am Mesach Venegas, a passionate self-taught Full Stack developer with a firm conviction of continuous learning. Throughout my journey, I have honed my skills through active participation in bootcamps, where I have consolidated my technical knowledge and gained a comprehensive perspective on web development. My love for technology and programming has led me to participate in real projects, where I have had the opportunity to apply and expand my skills. This hands-on experience has allowed me to face real-world challenges and find creative and efficient solutions."
                        }
                    </p>
                    <p>
                        {
                            language ? "Mi entusiasmo por aprender se refleja en mi disposición para explorar nuevas tecnologías y metodologías. Estoy convencido de que la versatilidad es clave en el mundo del desarrollo, y estoy constantemente buscando maneras de mejorar y adaptarme a las últimas tendencias. En busca de mi primera oportunidad laboral, estoy emocionado por contribuir con mis conocimientos y habilidades a un equipo dinámico. Mi objetivo es no solo aportar al crecimiento de la empresa, sino también seguir evolucionando como desarrollador. ¡Estoy listo para sumergirme en nuevos retos y alcanzar nuevos horizontes en mi desarrollo profesional!" : "My enthusiasm for learning is reflected in my willingness to explore new technologies and methodologies. I am convinced that versatility is key in the world of development, and I am constantly looking for ways to improve and adapt to the latest trends. Looking for my first job opportunity, I am excited to contribute my knowledge and skills to a dynamic team. My goal is not only to contribute to the growth of the company, but also to continue evolving as a developer. I am ready to immerse myself in new challenges and reach new horizons in my professional development!"
                        }
                    </p>
                </div>
            </div>
            <div className="skill_container" id='skills'>
                <h2>{language ? "Habilidades":"Skills"}</h2>
                <div className='skills'>
                    <figure className='skill_item' id='git'>
                        <img src="/assets/git.svg" alt="git_icon" title='Git'/>
                    </figure>
                    <figure className='skill_item' id='github'>
                        <img src="/assets/github.svg" alt="github_icon" title='GitHub'/>
                    </figure>
                    <figure className='skill_item' id='postgres'>
                        <img src="/assets/postgresql.svg" alt="github_icon" title='PostgreSQL'/>
                    </figure>
                    <figure className='skill_item' id='sequelize'>
                        <img src="/assets/sequelize.svg" alt="sequelize_icon" title='Sequelize ORM'/>
                    </figure>
                    <figure className='skill_item' id='node'>
                        <img src="/assets/node.svg" alt="node_icon" title='NodeJs'/>
                    </figure>
                    <figure className='skill_item' id='react'>
                        <img src="/assets/react.svg" alt="react_icon" title='ReactJs'/>
                    </figure>
                    <figure className='skill_item' id='python'>
                        <img src="/assets/python.svg" alt="python_icon" title='Python'/>
                    </figure>
                    <figure className='skill_item' id='python'>
                        <img src="/assets/javascript.svg" alt="javascript_icon" title='JavaScript'/>
                    </figure>
                </div>
            </div>
        </>
    );
};

export default AboutMe;