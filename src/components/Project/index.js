import { StyledProject } from "../../Styles";
import { BiLinkExternal } from 'react-icons/bi'

function Project(props) {
    return (
        <StyledProject>
            <figure>
                <img src={props.background_image} alt={"foto ilustrativa"} />
            </figure>
            <div>
                <div>
                    <h2>{props.title}</h2>
                </div>
                <div>
                    <p>{props.description}</p>

                    {props.languages &&
                    <>
                        <p>Linguagens utilizadas: {props.languages}</p>

                        <a href={props.link} target={"_blank"} rel="noreferrer">
                            <BiLinkExternal color={'#fff'} size={18} />
                        </a>
                    </>}
                </div>
            </div>
        </StyledProject>
    );
}

export default Project;