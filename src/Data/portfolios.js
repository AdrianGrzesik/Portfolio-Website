
import portfolio from '../img/portfolio.jpg';
import helpapp from '../img/helpapp.png';
import threed from '../img/3d.png';
import node from '../img/node.png';

const portfolios = [
    {
        id: 1,
        category: 'JAVA',
        image: helpapp,
        link1: 'https://github.com/AdrianGrzesik/HelpAPP',
        link2: 'https://github.com/AdrianGrzesik/HelpAPP',
        title: 'HelpAPP',
        text: 'Student project mobile appllication for safety purposes'
    },
    {
        id: 2,
        category: 'C++',
        image: threed,
        link1: 'https://github.com/AdrianGrzesik/3D_Silnik',
        link2: 'https://github.com/AdrianGrzesik/3D_Silnik',
        title: '3D Engine',
        text: 'Project from scratches'
    },
    {
        id: 3,
        category: 'ReactJS',
        image: portfolio,
        link1: 'https://github.com/AdrianGrzesik/Portfolio-Website',
        link2: 'https://github.com/AdrianGrzesik/Portfolio-Website',
        title: 'Portfolio ',
        text: 'Website in ReactJS'
    },
    {
        id: 4,
        category: 'Node.JS',
        image: node,
        link1: 'https://github.com/AdrianGrzesik/Login-Register-Service',
        link2: 'https://github.com/AdrianGrzesik/Login-Register-Service',
        title: 'Login/Register server',
        text: 'First Node.js project with services'
    }
]

export default portfolios;
