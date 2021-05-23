import React from 'react'
import styled from 'styled-components'

function ResumeItem({ year, title, subtitle, text }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    .left-content{
        padding-left: 20px;
        position: relative;
        p{
            display: inline-block;

        }
    }
    .right-content{
        padding-left: 1rem;
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .5rem;
        }
        h6{
            padding-bottom: .4 rem;
            font-size: 1.5rem;
            color: var(--white-color)
        }

    }
`;

export default ResumeItem
