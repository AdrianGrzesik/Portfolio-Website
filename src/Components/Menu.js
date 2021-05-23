import React from 'react'
import styled from 'styled-components'
import GitHub from '@material-ui/icons/GitHub'

function Menu({ menuItem }) {

    return (
        <MenuStyled>
            {
                menuItem.map((item => {
                    return <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt="" />
                                <ul>
                                    <li>
                                        <a href={item.link1}>
                                            <GitHub />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h6>{item.title}</h6>
                        <p>{item.text}</p>
                    </div>
                })
                )}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and ( max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .grid-item{
        margin-bottom: 2rem;
        h6{
            font-size: 1.6rem;
            color: var(--white-color);
        }
        .portfolio-content{
                display: block;
                position: relative;
                img{
                    width: 100%;
                    height: 30vh;
                    object-fit: cover;
                }
            ul{
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 40%;
                opacity: 0;
            }
            .portfolio-image{
                &:before{
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    transform: scale(0);
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                }

            }
            .portfolio-image:hover{
                &:before{
                    height: calc(100% - 12%);
                    width: calc(100% - 4%);
                    background-color: white;
                    opacity: 0.9;
                    transform-origin: 0;
                    transform: scale(1);
                    transition: all .4s ease-in-out;
                }
                ul{
                    display: block;
                    position: absolute;
                    left: 50%;
                    top: 45%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 1;
                    transition: all .4s ease-in-out;
                    svg{
                        font-size: 5rem;
                    }
                    li{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        &:hover{
                            color: var(--primary-color);
                        }
                        a{
                            padding: 1.5rem;
                            border-radius: 50%;
                            border: 5px solid var(--background-light-color-2);
                            &:hover{
                                border: 5px solid var(--primary-color);
                            }
                        }
                    }
                }
            }
        }
    }

`;

export default Menu
