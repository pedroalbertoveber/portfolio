import ProfileImage from '../../assets/images/foto-de-perfil.jpg';
import { StyledAnchor, AnchorContainer, StyledImage, StyledHeader } from '../../Styles';
import backgroundImage from '../../assets/images/profile-background.jpg';


 function Header() {
    return (
        <StyledHeader url={backgroundImage}>
            <StyledImage>
                <img src={ProfileImage} alt="foto de perfil" />
            </StyledImage>
            <div>
                <nav>
                    <AnchorContainer>
                        <StyledAnchor>
                            <a href="#projetos">Projetos</a>
                        </StyledAnchor>
                        <StyledAnchor>
                            <a href="#experiencias">Experiências</a>
                        </StyledAnchor>
                        <StyledAnchor>
                            <a href="#redes_socias">Redes Sociais</a>
                        </StyledAnchor>
                    </AnchorContainer>
                    
                </nav>
            </div>
        </StyledHeader>
    );
 }

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
    

        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        })
    })
 })

 export default Header;