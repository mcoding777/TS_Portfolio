import styled from 'styled-components';
import { SubTitle, Section } from '../../components';
import ResumeCard from '../../components/aboutme/ResumeCard';
import React from 'react';

const Resume: React.FC = (): JSX.Element => {
    const tmpTimeLine = [
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
            <ResumeCardArea>
                <ResumeCard title="🕰 TimeLine" resumeDetail={tmpTimeLine} isEditMode={false} />
                <ResumeCard title="👑 Certificate & Awards" resumeDetail={tmpTimeLine} isEditMode={false} />
            </ResumeCardArea>
        </Section>
    );
};

export default Resume;

const ResumeCardArea = styled.div`
    display: flex;
    flex-direction: row;
`;
