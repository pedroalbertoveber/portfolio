import { StyledIcon } from "../../Styles";

function LinkSocialMedia({ nome, icone, background }) {
    return(
        <StyledIcon background={background}>
                <div>   
                    {icone}
                </div>
                <h4>
                    {nome}
                </h4>
        </StyledIcon>
    );
}

export default LinkSocialMedia;