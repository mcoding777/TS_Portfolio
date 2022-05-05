import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SubTitle, ProjectCard } from '../../components';
import { projectList } from '../../utils/secret/project';

const ProjectPage = () => {
    return (
        <Div>
            <SubTitle text={`📂 Project`} />
            <GridDiv>
                {projectList.map((project, idx) => {
                    return (
                        <Link to={`${idx}`} key={project.title + idx}>
                            <ProjectCard {...project} />
                        </Link>
                    );
                })}
            </GridDiv>
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

const GridDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    a {
        text-decoration: none;
    }
`;
