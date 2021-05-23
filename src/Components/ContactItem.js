import React from 'react'
import styled from 'styled-components'

function ContactItem({ icon, title, cont1, cont2 }) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                <p>{cont2}</p>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding:1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    .left-content{
        transition: all .4s ease-in-out;
        padding: 1.5rem;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        border-radius: 50%;
        border: 2px solid var(--white-color);
        color: var(--white-color);
        &:hover{
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
        cursor: pointer;
        transform: translateY(3px);
        }
        svg{
            font-size: 2.3rem;
            color: inherit;
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            padding: .1rem 0;
        }
    }
`;

export default ContactItem;
