import React from 'react'
import styled from 'styled-components';
import fullMe from '../img/fullMe.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={fullMe} alt="" />
            </div>
            <div className="right-content">
                <h4>
                    I am <span>Adrian</span>
                </h4>
                <p className="paragraphy">
                    Double student : fire prevention engineering and Information Technology from Warsaw. After three years of learning
                    i decided to prepare myself for future job as programmer by reading books and preparing my own portfolio projects.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Laguages</p>
                    </div>
                    <div className="info">
                        <p>Adrian Grzesik</p>
                        <p>23</p>
                        <p>Polish </p>
                        <p>Polish, English</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 2rem;
    display: flex;
    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
    
    .left-content{
        width: 100%;
        img{
            width: 90%;
            object-fit: cover;
        }
    }

    .right-content{
        width:100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraphy{
            padding: 1rem 0;
        }
        .about-info{
            padding-bottom: 1rem;
            display: flex;
            .info-title{
                padding-right: 6rem;
                p{
                    font-weight: 400;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }

`;


export default ImageSection;

