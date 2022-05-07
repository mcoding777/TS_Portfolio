import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from '../../components';
import { ProjectPage } from '.';
import { projectList } from '../../utils/secret/project';

const ProjectList: React.FC = (): JSX.Element => {
    return (
        <ProjectPage>
            <GridDiv>
                {projectList.map((project, index) => {
                    return <ProjectCard {...project} key={index} index={index} />;
                })}
            </GridDiv>
        </ProjectPage>
    );
};

export default ProjectList;

const GridDiv = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
`;
