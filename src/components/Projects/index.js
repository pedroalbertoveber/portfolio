import { projects } from "../../services/api";
import Project from "../Project";

import { StyledProjects } from '../../Styles'

function Projects() {
    return (

        <StyledProjects>

            <div>
                <h2 className="title" id="projetos">Meus Projetos</h2>
            </div>

            {projects.map((project, index) => {
                return (
                    <div key={index}className= "container">
                        <Project 
                        title={project.title}
                        background_image={project.background_image}
                        languages={project.languages}
                        link={project.link}
                        description={project.description}
                        />
                    </div>
                );
            })}
        </StyledProjects>

    );
}

export default Projects;