import './project.css'

function ProjectCard({image, description, technologies, preview, code}) {
    return (
        <div className="project_card">
            <img src="/images/project_1.jpg" alt="" />
            <div className='card_layer'>
                <h3>E-commerce</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam praesentium minus tempore accusantium quidem repudiandae quod nam sapiente dolorum quasi obcaecati possimus necessitatibus, totam rerum velit tenetur quis nulla voluptatibus!</p>
                <div className="icons_container">
                    <ul className="tech">
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>NodeJs</li>
                        <li>Express</li>
                        <li>Redux</li>
                    </ul>
                    <ul className="links">
                        <li>Preview online</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;