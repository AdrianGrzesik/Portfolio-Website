import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My skills'} span={'My skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'React'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar
                        title={'JavaScript'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar
                        title={'HTML5'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'CSS'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'PHP'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'C++'}
                        width={'40%'}
                        text={'40%'}
                    />
                    <ProgressBar
                        title={'Angular (during learning)'}
                        width={'30%'}
                        text={'30%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap:1rem;
    }

`;

export default Skills
