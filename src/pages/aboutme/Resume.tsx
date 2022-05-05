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
            <ResumeDiv>
                <ResumeCardDiv>
                    <CardDetailArea>
                        {resumeDetail.map((item, idx) => {
                            return (
                                <DetailRowContainer className="test" key={idx}>
                                    <YearTitle>{item.year}</YearTitle>
                                    <YearColumnDiv>
                                        {item.detail.map((i, idx) => (
                                            <YearRowDiv key={idx}>
                                                <YearDot />
                                                <div>
                                                    <DetailTitle>{i.detailTitle}</DetailTitle>
                                                    <DetailDescribtion>{i.detailDescriptions}</DetailDescribtion>
                                                </div>
                                            </YearRowDiv>
                                        ))}
                                    </YearColumnDiv>
                                </DetailRowContainer>
                            );
                        })}
                    </CardDetailArea>
                </ResumeCardDiv>
            </ResumeDiv>
        </Section>
    );
};

export default Resume;

const ResumeDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const ResumeCardDiv = styled.div`
    width: 100%;
    margin: 20px 5px;
`;

const CardDetailArea = styled.div`
    min-height: 400px;
    padding: 15px 10px;
    box-sizing: border-box;
    background-color: rgba(196, 196, 196, 0.4);
    border-radius: 0px 0px 8px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DetailRowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const YearTitle = styled.li`
    width: 50px;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
    font-size: 19px;
    font-weight: 600;
`;

const YearColumnDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
`;

const YearRowDiv = styled.div`
    width: 80%;
    position: relative;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    background-color: #fff;
    margin: 2px 0px;
    padding: 5px 3px;
    box-sizing: border-box;
`;

const YearDot = styled.div`
    background-color: ${(props) => props.theme.color.main};
    width: 15px;
    height: 15px;
    border-radius: 15px;
    margin: 0px 5px 0px 10px;
`;

const DetailTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 2px;
`;

const DetailDescribtion = styled.div`
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 10px;
`;
