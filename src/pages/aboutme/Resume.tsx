import styled from 'styled-components';
import { SubTitle, Section } from '../../components';
import React from 'react';

const Resume: React.FC = (): JSX.Element => {
    const resumeDetail = [
        {
            year: 2019,
            detail: [
                {
                    detailTitle: '2019 대학교 졸업',
                    detailDescriptions: '대학교 졸업에 대한 세부 사항입니다',
                },
                {
                    detailTitle: '2019 엘리스 AI 트랙',
                    detailDescriptions: null,
                },
            ],
        },
        {
            year: 2020,
            detail: [
                {
                    detailTitle: '2020 대학교 졸업',
                    detailDescriptions: '대학교 졸업에 대한 세부 사항',
                },
                {
                    detailTitle: '엘리스 AI 트랙',
                    detailDescriptions: '엘리스 AI 트랙에 대한 세부 사항입니다.',
                },
            ],
        },
        {
            year: 2021,
            detail: [
                {
                    detailTitle: 'string',
                    detailDescriptions: 'string',
                },
                {
                    detailTitle: 'string',
                    detailDescriptions: null,
                },
            ],
        },
    ];

    return (
        <Section>
            <SubTitle text="💼 Resume" />
            <ResumeUl>
                {resumeDetail.map((item) => {
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
                                            {i.detailTitle}
                                        </DetailTitleDiv>
                                        <DetailDescribtionDiv>{i.detailDescriptions}</DetailDescribtionDiv>
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
