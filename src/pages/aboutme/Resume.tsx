import styled from 'styled-components';
import React from 'react';
import { SubTitle, Section } from '../../components';
import { resumeList } from '../../utils/secret/aboutme';

const Resume: React.FC = (): JSX.Element => {
    return (
        <Section>
            <SubTitle text="💼 Resume" />
            <ResumeUl>
                {resumeList.map((item) => {
                    return (
                        <YearLi key={item.year}>
                            <YearTitleDiv>{item.year}</YearTitleDiv>
                            <YearTextDiv>
                                {item.detail.map((i, index) => (
                                    <DetailDiv key={index}>
                                        <DetailTitleDiv>
                                            <svg
                                                viewBox="0 0 100 100"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="10"
                                                width="10"
                                            >
                                                <circle cx="50" cy="50" r="50" fill="#5993F6" />
                                            </svg>
                                            {i.title}
                                        </DetailTitleDiv>
                                        <DetailDescribtionDiv>{i.description}</DetailDescribtionDiv>
                                    </DetailDiv>
                                ))}
                            </YearTextDiv>
                        </YearLi>
                    );
                })}
            </ResumeUl>
        </Section>
    );
};

export default Resume;

const ResumeUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    padding: 0;
    box-sizing: border-box;
`;

const YearLi = styled.li`
    display: flex;
    flex-direction: row;

    margin-bottom: 20px;
`;

const YearTitleDiv = styled.div`
    width: 50px;

    font-weight: 700;
`;

const YearTextDiv = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;

const DetailDiv = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;

    background-color: ${({ theme }) => theme.color.background};
    border-radius: 10px;

    svg {
        margin-right: 5px;
    }
`;

const DetailTitleDiv = styled.div`
    font-weight: 400;

    margin-bottom: 5px;
`;

const DetailDescribtionDiv = styled.div`
    font-size: 0.8rem;
`;
