import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation'

function Sidebar({ navToggle }) {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    z-index: 20;
    width: 16.3rem;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    position: fixed;
    transition: all .4s ease-in-out;
    @media screen and (max-width: 1100px){
        transform: translateX(-100%);
    }

`;


export default Sidebar;