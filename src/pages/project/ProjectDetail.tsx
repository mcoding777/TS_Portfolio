import styled from 'styled-components';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ProjectPage } from '.';
import { projectList } from '../../utils/secret/project';
import { ProjectCardI } from 'ProjectModule';

const ProjectDetail: React.FC = (): JSX.Element => {
    const { pathname } = useLocation(),
        projectIndex = Number(pathname.split('/')[3]);

    const data: ProjectCardI = projectList[projectIndex];

    console.log(data);

    return (
        <ProjectPage>
            <FlexColumnDiv>
                <div>
                    <p>{data.title}</p>
                    <p>
                        제작기간 : {data.startDate} ~ {data.endDate}
                    </p>
                </div>

                <div>이미지 공간</div>
                <div>
                    <p>프로젝트 설명</p>
                    <p>{data.explain}</p>
                </div>
                <div>
                    <p>기술스택</p>
                    <p>{data.techStack.join(', ')}</p>
                </div>
            </FlexColumnDiv>
        </ProjectPage>
    );
};

export default ProjectDetail;

const FlexColumnDiv = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
`;
