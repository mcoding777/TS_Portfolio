import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCardI } from 'ProjectModule';

const ProjectCard: React.FC<ProjectCardI> = ({ ...props }): JSX.Element => {
    const [gifToggle, setGifToggle] = useState<boolean>(false);

    const handleGifPlayer = () => {
        setGifToggle((current) => !current);
    };

    return (
        <CardDiv className={gifToggle ? 'active' : ''} onMouseOver={handleGifPlayer} onMouseOut={handleGifPlayer}>
            <ImgLink to={`${props.index}`}>
                <img alt={props.title} src={gifToggle ? props?.gifSrc : props?.thumbnail} width="100%" height="100%" />
            </ImgLink>
            <ExplainDiv>
                <p className="title">{props?.title}</p>
                <p>
                    제작기간 : {props.startDate} ~ {props.endDate}
                </p>
                <p>
                    기술스택 :{' '}
                    {props.techStack.join(',').length < 25
                        ? props.techStack.join(', ')
                        : props.techStack.join(', ').substring(0, 25) + '...'}
                </p>
            </ExplainDiv>
        </CardDiv>
    );
};

export default ProjectCard;

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;

    width: 90%;
    height: 40vh;

    margin: 10px auto;

    border-radius: 10px;
    border: 1px solid #bdbdbd;

    overflow: hidden;

    cursor: pointer;

    &.active {
        transform: translateY(-3%);
        transition: transform 0.1s ease-out;
    }
`;

const ImgLink = styled(Link)`
    width: 100%;
    height: 70%;

    background-color: #f5f5f5;
`;

const ExplainDiv = styled.div`
    display: flex;
    flex-direction: column;

    height: 30%;

    padding: 10px;

    color: #757575;

    p {
        margin: 2px;

        font-size: 0.9rem;

        &.title {
            color: black;
            font-weight: bold;
            font-size: 1.1rem;
        }
    }
`;
