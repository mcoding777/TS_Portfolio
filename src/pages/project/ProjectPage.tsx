import React from 'react';
import styled from 'styled-components';
import { SubTitle, ProjectCard, Section } from '../../components';
import { projectList } from '../../utils/secret/project';

const ProjectPage: React.FC = (): JSX.Element => {
    return (
        <Section>
            <SubTitle text="📂 Project" />
            <GridDiv>
                {projectList.map((project, index) => {
                    return <ProjectCard {...project} key={index} index={index} />;
                })}
            </GridDiv>
        </Section>
    );
};

export default ProjectPage;

const GridDiv = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
`;
