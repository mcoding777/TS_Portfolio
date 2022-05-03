import { SubTitleEdit, ProjectDiv } from '../../components';
import { useState, useMemo } from 'react';
import { ProjectProps } from 'ProjectPageModule';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import React from 'react';

const datas: ProjectProps.ProjectDetail[] = [
    {
        id: '0',
        title: '프로젝트 토끼토끼',
        startDate: '2021-01-30',
        endDate: '2021.02.30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명0',
        urlLink: [],
    },
    {
        id: '1',
        title: '프로젝트 까악까악',
        startDate: '2021-01-30',
        endDate: '2021-02-30',
        techStack: ['Django', 'TS', 'JavaScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명1',
        urlLink: [],
    },
    {
        id: '2',
        title: '프로젝트 끼룩끼룩',
        startDate: '2021-01-30',
        endDate: '2021-02-30',
        techStack: ['Django', 'Flask', 'TypeScript', 'JavaScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명2',
        urlLink: [],
    },
    {
        id: '3',
        title: '프로젝트 끼토끼토',
        startDate: '2021-01-30',
        endDate: '2021-02-30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명3',
        urlLink: [],
    },
    {
        id: '4',
        title: '프로젝트 어흥어흥',
        startDate: '2021.01.30',
        endDate: '2021.02.30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명4',
        urlLink: [],
    },
];

const ProjectPage = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    const data = useMemo(() => {
        return { data: datas };
    }, []);

    return (
        <Div>
            <SubTitleEdit text={`📂 Project`} />
            <ProjectDiv {...data} handleSubmit={handleSubmit} />
        </Div>
    );
};

export default ProjectPage;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: auto;
`;
