import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import ReactJS from '../img/reactJS.png';
import JavaScript from '../img/JS.png';
import HTML from '../img/HTML5.png';
import Scss from '../img/scss.png';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard
                        image={ReactJS}
                        title={'React JS'}
                        paragraph={' I finished basic coure and made few smaller projects. This website was also made by using create-react-app '}
                    />
                    <ServiceCard
                        image={JavaScript}
                        title={'JavaScript'}
                        paragraph={'I read few books about basics, including Ecmascript6  '}
                    />
                    <ServiceCard
                        image={HTML}
                        title={'HTML5'}
                        paragraph={' Junior-level knowledge '}
                    />
                    <ServiceCard
                        image={Scss}
                        title={'CSS/SCSS'}
                        paragraph={'Mostly learning during practise from w3schools.com'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.div`
    .services{
        margin-top: .5rem;
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        justify-content: space-between;
        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(1, 1fr);
        }
    }

`;

export default ServicesSection;
