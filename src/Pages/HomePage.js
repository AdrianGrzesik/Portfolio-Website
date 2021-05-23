import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particles'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'


function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi I am <span>Adrian Grzesik</span></h1>
                <p>
                    Junior React Frontend Developer
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/adrian.grzesik.948/" target="_blank" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/AdrianGrzesik?tab=repositories" target="_blank" className="icon i-github">
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content:center;
                border-radius: 50%;
                
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                    cursor: pointer;
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
        }
    }

`;

export default HomePage;