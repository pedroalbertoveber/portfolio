import LinkSocialMedia from "../LinkSocialMedia";
import api from "../../services/api";

import { StyledSocialMedia, MediaContainer } from '../../Styles'

function SocialMedia(){
    return(
        <StyledSocialMedia>
            <h2 id="redes_socias">Redes Sociais</h2>

            <MediaContainer>
                {api.map((media) => {
                    return (
                        <a key={media.name} href={media.link} target={"_blank"} rel={"noreferrer"}>
                            <LinkSocialMedia 
                                nome={media.name}
                                icone={media.icon}
                                background={media.background_color}
                            />
                        </a>
                    );
                })}

            </MediaContainer>
        </StyledSocialMedia>
    );
}

export default SocialMedia;