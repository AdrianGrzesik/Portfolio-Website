import React from 'react'
import styled from 'styled-components'

function ServiceCard({ image, title, paragraph }) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-color);
    margin: 2rem 1rem;
    border-left: 2px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-left: 2px solid var(--primary-color);
        transform: translateY(3px);
    }
    .container{
        padding: 1.2rem;
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            padding-bottom: 1rem;
            &:after{
                content: "";
                width: 5rem;
                background-color: var(--border-color);
                height: 4px;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
        p{
            padding-top: .5rem;
        }
    }

`;

export default ServiceCard
