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

                <div className="image_container">
                    {Array.from(Array(data?.imgList?.number).keys()).map((item) => (
                        <img
                            src={`${process.env.PUBLIC_URL}/img/project/${data?.imgList?.name}/${data?.imgList?.name}_${item}.jpg`}
                            alt=""
                        />
                    ))}
                </div>
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

    width: 100%;
    height: 100%;

    .image_container {
        img {
            width: 100%;

            margin: 10px 0;

            border: 1px solid ${({ theme }) => theme.color.border};
            box-shadow: 3px 3px 5px 1px #d8d8d8;
        }
    }
`;
