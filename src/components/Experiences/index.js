import { experience } from "../../services/api";
import History from "../History";
import { StyledExperiences } from '../../Styles';

function Experiences() {
    return (
        <StyledExperiences>

            <div>
                <h2 className="title" id="experiencias">Experiências Profissionais</h2>
            </div>

            {experience.map((job) => {
                return (
                    <div className="container" key={job.title}>
                        <History 
                        title={job.title}
                        description={job.description}
                        current_job={job.current_job}
                        begening = {job.begening}
                        end={job.end}
                        cargo={job.cargo}
                        />
                    </div>
                );
            })}
        </StyledExperiences>
    );
}

export default Experiences;