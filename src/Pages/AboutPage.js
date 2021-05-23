import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout } from '../styles/Layouts'
import ImageSection from '../Components/ImageSection'
import ServicesSection from '../Components/ServicesSection'

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.div`



`;

export default AboutPage
