import React from 'react'
import styled from 'styled-components'

function Button({ filter, button }) {
    return (
        <ButtonsStyled>
            {
                button.map((but, i) => {
                    return <ButtonStyled key={i} onClick={() => filter(but)}>
                        {but}
                    </ButtonStyled>
                })
            }
        </ButtonsStyled>
    )
}
const ButtonsStyled = styled.div`
    margin-bottom: 2rem;
    display: fixed;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    
`;
const ButtonStyled = styled.button`
    margin-bottom: 1rem;
    border-radius: 5%;
    outline: none;
    border:none;
    background-color: var(--background-light-color-2);
    padding: .5rem 1.2rem;
    font-size: inherit;
    color: var(--white-color);
    transition: .4 ease-in-out;
    &:active, &:focus{
        background-color: var(--primary-color);
    }
    &:hover{
        cursor: pointer;
        background-color: var(--primary-color);
    }
    &:not(:last-child){
        margin-right: 1rem;
    }
`;


export default Button
