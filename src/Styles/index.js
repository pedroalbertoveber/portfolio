import styled from 'styled-components';
import backgroundImage from '../assets/images/profile-background.jpg';

export const StyledAnchor = styled.li`
    padding: 3px 8px;
    font-size: 18pt;
    margin-bottom: 15px;

    &:last-child {
        margin: 0;
    }

    a {
        transition: all 0.2s;
        color: #ccc;
    }

    a:hover{
        color: #fff;
    }

    @media (min-width: 800px) {
        margin: 0;
        margin-right: 20px;
    }
`;

export const AnchorContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const StyledImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-image: url(${backgroundImage});
    object-fit: contain;

    @media (min-width: 800px) {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;

        padding: 30px 80px;
    }
`;

export const StyledProjects = styled.section`

    display: flex;
    flex-direction: column;
    padding: 30px 0;
    background-color: #111;
    align-items: center;

    .title {
        font-size: 22pt;
        color: #fff;
        margin-bottom: 30px;
    }

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
    }

    @media (min-width: 800px) {
        .container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 16px;
        }
    }
`;

export const StyledProject = styled.div`

    width: 1000px;
    max-width: 80%;
    background-color: #222;
    padding: 10px 16px;
    margin-bottom: 16px;
    border-radius: 4px;
    box-shadow: 3px 3px 10px rgba(255,255,255, .15);

    @media (min-width: 800px) {
        display: flex;
    }
    

    &:last-child {
        margin-bottom: 0;
    }

    div h2 {
        color: #fff;
        margin-bottom: 10px;
    }

    div p {
        color: #ccc;
        margin-bottom: 10px;
    }

    figure img {
        display: none;

        @media (min-width: 800px) {
            display: block;
            width: 200px;
            height: 200px;
            object-fit: cover;
            margin-right: 16px;
        }
    }

`;


export const StyledExperiences = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    background-color: #111;

    .title {
        font-size: 22pt;
        color: #fff;
        margin-bottom: 30px;
    }

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
        
    }
`;


export const StyledHistory = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #222;
    margin-bottom: 30px;
    width: 80%;
    max-width: 1000px;
    border-radius: 4px;
    box-shadow: 3px 3px 10px rgba(255,255,255, .15);

    padding: 10px 16px;

    &:last-child {
        margin: 0;
    }

    h2 {
        color: #Fff;
        font-size: 16pt;
        margin-bottom: 16px;
    }

    p {
        text-align: justify;
        color: #ccc;
        line-height: 30px;

        strong {
            color: #Eee;
        }

    }

    span {
        color: #fff;
        font-weight: bold;
        font-size: 11pt;
        display: block;
        margin: 15px 0;

    }

    @media (min-width: 800px) {
        flex-direction: row;
        align-items: center;
        padding: 30px 15px;
    
        
        p, span {
            width: 70%;
            margin-left: 200px;
            margin-bottom: 5px;
        }

        span:last-child {
            margin-bottom: 0;
        }

        h2 {
            width: 100px;
            margin-left: 30px;
        }
    }
`;




export const StyledSocialMedia = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px;
    background-color: #111;  

    @media (min-width: 800px) {
        padding-bottom: 60px;
    }

    h2 {
        font-size: 24pt;
        margin-bottom: 30px;
        color: #fff; 
    }

`;

export const MediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
        flex-direction: row;
        max-width: 700px;
        flex-wrap: wrap;
    }
`;

export const StyledIcon = styled.a`
    width: 213px;
    display: flex;
    align-items: center;
    background-color: ${props => props.background};
    margin-bottom: 15px; 
    padding: 5px 10px;
    box-shadow: 3px 3px 7px rgba( 255, 255, 255, .1);
    border-radius: 4px;
    cursor: pointer;

    @media (min-width: 800px) {
        margin-right: 20px;
        margin-bottom: 20px;

        &:nth-child(3n) {
            margin-right: 0;
        }
    }

    div {
        margin-right: 10px;
    }

    h4 {
        color: #fff;
        transition: all .2s;
    }
    
    h4:hover {
        color: #ddd;
    }

`;