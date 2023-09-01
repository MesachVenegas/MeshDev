
function ProjectCard({image, tittle, technologies, preview_site, github_link}) {
    return (
        <div className="project_item" style={{ backgroundImage: "url('/public/images/Pokedex_preview.png')"}}>
            <a href="#" class="project_item-link">

                <div className="project_item-bg">
                </div>

                <img className="project_item-img" src=""/>

                <div className="project_item-title">
                    { tittle }
                </div>

                <div className="project_item-tech-box">
                    Stack:
                    <span className="project_item-date">
                        { technologies }
                    </span>
                </div>
            </a>
        </div>
    );
}

export default ProjectCard;