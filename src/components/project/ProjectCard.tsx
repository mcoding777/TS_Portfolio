import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import { ProjectProps } from 'ProjectPageModule';

interface IProps extends ProjectProps.ProjectDetail {}

const ProjectCard: React.FunctionComponent<IProps> = ({ ...props }) => {
    const [gifToggle, setGifToggle] = useState<boolean>(false);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleGifPlayer = () => {
        setGifToggle((current) => !current);
    };

    return (
        <Div>
            <div className="project" onMouseOver={handleGifPlayer} onMouseOut={handleGifPlayer}>
                <img alt={props.title} ref={imgRef} src={gifToggle ? props?.gifSrc : props?.imgSrc} />
            </div>
            <div className="explain">
                <div>
                    <b>{props?.title}</b>
                </div>
                <div>
                    제작기간 : {props.startDate.replace(/-/gi, '.')} ~ {props.endDate.replace(/-/gi, '.')}
                </div>
                <div>
                    기술스택 :{' '}
                    {props.techStack.join(',').length < 25
                        ? props.techStack.join(', ')
                        : props.techStack.join(', ').substring(0, 25) + '...'}
                </div>
            </div>
        </Div>
    );
};

export default ProjectCard;

const Div = styled.div`
    border-radius: 3.5%;
    display: flex;
    flex-direction: column;
    border: 1px solid #bdbdbd;
    overflow: hidden;
    width: 90%;
    margin: 4%;

    .project {
        background-color: #f5f5f5;
        width: 50%;
        img {
            object-fit: cover;
        }
    }

    .explain {
        display: flex;
        flex-direction: column;
        padding: 1%;
        padding-left: 3%;
        text-align: left;
        background-color: white;
        color: #757575;
        div {
            margin: 0.5%;
        }
        b {
            color: black;
        }
        float: bottom;
    }
`;
