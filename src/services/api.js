import { FaGithub, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import moveisBerna from '../assets/images/moveis-berna.jpg';
import imageDefault from '../assets/images/default.jpg';
import simoneVeber from '../assets/images/simone-veber.jpg';

const api = [
    {
        name: 'Facebook',
        icon: <FaFacebook size={32} color={"#fff"}/>,
        background_color: "#1877f2",
        link: "https://www.facebook.com/pedro.veber.3", 
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedin size={32} color={"#fff"} />,
        background_color: "#0077b5",
        link: "https://www.linkedin.com/in/pedro-alberto-veber-berna-a367551ba/", 
    },
    {
        name: 'Instagram',
        icon: <FaInstagram size={32} color={"#fff"} />,
        background_color: "#515bd4",
        link: "https://www.instagram.com/pedroveber_/", 
    },
    {
        name: "Twitter",
        icon: <FaTwitter size={32} color={"#fff"}/>,
        background_color: "#00acee",
        link: "https://twitter.com/pedroveber_", 
    },
    {
        name: "Github",
        icon: <FaGithub size={32} color={"#fff"} />,
        background_color: "#090909",
        link: "https://github.com/pedroalbertoveber", 
    },
    {
        name: "WhatsApp",
        icon: <FaWhatsapp size={32} color={"#fff"} />,
        background_color: "#075e54",
        link: "https://whatsapp.com.br/", 
    },
];

export default api;

export const experience = [
    {
        title: "Amparo Seguros",
        description: "Esta foi minha primeira experiência profissional. Cuidava das tratativas de negociação de novos negócios bem como renovações. Responsável pela organização das pastas do escritório e pelas planilhas de controle. Atuei também no setor de Marketing gerenciando o Instagram/Facebook da empresa.",
        current_job: false,
        begening: "08/2017",
        end: "12/2020",
        cargo:"Auxiliar Adm",
    },
    {
        title: "Braslux",
        description: "Este foi o primeiro emprego que tive na área de engenharia. Trabalhei no laboratório de testes da empresa, onde submetia as peças, que a mim chegavam, à condições extremas que poderiam ser vivenciadas em campo. Também era responsável pela planilha de controle de estoque de agentes químicos e por revisar dados de testes realizados.",
        current_job: false,
        begening: "02/2021",
        end: "05/2021",
        cargo:"Estagiário",
    },
    {
        title: "TL Consultoria",
        description: "Este é o emprego onde me encontro atualmente. Sou responsável por controlar os faturamentos dos seguros de vida em grupo que estão cadastrados em nossa base, presto suporte para corretores em geral quando os mesmos possuem dificuldades com o sistema da companhia bem como quando precisam solicitar suporte da matriz para interferir em descontos de negociação. Aqui foi onde tive meu primeiro contato direto com a programação... Desenvolvi um programa, na linguagem Python, o qual automatiza envio de e-mails repetitivos e desgastantes. Um trabalho que, anteriormente, levava torno de 50min para ser realizado, agora consome 5min do meu dia. A mesma estrutura do programa, pôde ser usado em outros e-mails de diferentes assuntos, com pequenos ajustes (é claro), sendo assim, possuo por volta de 4h semanais disponíveis para outros serviços, graças ao programa que desenvolvi.",
        current_job: true,
        begenig: "07/2021",
        end: "",
        cargo:"Auxiliar de Escritório",
    },
];

export const projects = [
    {
        title: "Móveis Berna",
        background_image: moveisBerna,
        description: "Este foi o primeiro projeto que desenvolvi. Inspirado na empresa de móveis sob medida do meu pai, fiz uma SPA de uma breve apresentanção e utilizando um menu dinâmico que só aparece na tela quando o mesmo for acionado.",
        languages: "HTML, CSS e JavaScript",
        link:"https://pedroalbertoveber.github.io/Moveis-Berna-LTDA/",
    },
    {
        title: "Simone Veber Corretora",
        background_image: simoneVeber,
        description: "Este foi o meu segundo projeto. Ispirado na profissão da minha mãe, desenvolvi um site, este com mais de uma página, onde o usuário pode consultar os imóveis disponíveis para venda bem como agendar uma visita direta com a corretora para avaliação do seu imóvel.",
        languages: "HTML, CSS e JavaScript",
        link:"https://pedroalbertoveber.github.io/simone-veber-corretora/pages/index.html",
    },
    {
        title: "Em desenvolvimento",
        background_image: imageDefault,
        description: "Projeto ainda está em processo de desenvolvimento",
        languages: "",
    },
    {
        title: "Em desenvolvimento",
        background_image: imageDefault,
        description: "Projeto ainda está em processo de desenvolvimento",
        languages: "",
    },
]

