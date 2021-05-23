import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import SmallTitle from './SmallTitle'
import Title from './Title'
import BusinessIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'

function Resume() {
    const briefcase = <BusinessIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={school} title={'Study History'} />
                </div>
                <div className="resume-block">
                    <div className="resume-content">
                        <ResumeItem
                            year={'2016-2020'}
                            title={'Fire Safety Engineering'}
                            subtitle={'Main School of Fire Service'}
                            text={" Bachelor's degree on duty"}
                        />
                    </div>
                    <div className="resume-content">
                        <ResumeItem
                            year={'2018- Present'}
                            title={'Electrical Department'}
                            subtitle={'Politechnika Warszawska'}
                            text={" Bachelor's degree "}
                        />
                    </div>
                    <div className="resume-content">
                        <ResumeItem
                            year={'2020-  Present'}
                            title={'Fire Safety Engineering'}
                            subtitle={'Main School of Fire Service'}
                            text={" Master's degree  on duty"}
                        />
                    </div>
                </div>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-block">
                    <div className="resume-content">
                        <ResumeItem
                            year={'February 2021'}
                            title={'InfoSoftware Polska'}
                            subtitle={'Internship'}
                            text={''}
                        />
                    </div>
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.div`
    .small-title{
        padding-bottom: 2rem;
        margin-top: 2rem;
    }
    .resume-block{
        margin-bottom: 2rem;
        border-left: 2px solid var(--border-color);
        padding-left: 2rem;
        .resume-content{
            border-left: 2px solid var(--white-color);
            &:not(:last-child){
                margin-bottom: 2rem;
            }
            padding-left: 2rem;
            &:hover{
                border-left: 2px solid var(--primary-color);
            }
            position: relative;
            &:before{
                content: "";
                position: absolute;
                left: -52px;
                top: 5px;
                height: 17px;
                width: 17px;
                border-radius: 50%;
                border: 2px solid var(--border-color);
                background-color: var(--background-dark-color);
            }
        }
    }
    
`;

export default Resume
