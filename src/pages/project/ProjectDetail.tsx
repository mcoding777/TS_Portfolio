import styled from 'styled-components';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ProjectPage } from '.';
import { projectList } from '../../utils/secret/project';
import { ProjectCardI } from 'ProjectModule';

interface ButtonListI {
    text: string;
    img: string;
    link: string;
    alt: string;
}

const ProjectDetail: React.FC = (): JSX.Element => {
    const { pathname } = useLocation(),
        projectIndex = Number(pathname.split('/')[3]);

    const data: ProjectCardI = projectList[projectIndex];

    const handleOpenPage = (url: string): void => {
        window.open(url);
    };

    const buttonList: ButtonListI[] = [
        {
            text: 'Live Demo',
            img: 'computer.svg',
            link: data.urlLink.demo,
            alt: '데모 아이콘',
        },
        {
            text: 'GitHub',
            img: 'github.svg',
            link: data.urlLink.github,
            alt: '깃허브 아이콘',
        },
        {
            text: 'Prototype',
            img: 'figma.png',
            link: data.urlLink.prototype,
            alt: '프로토타입 아이콘',
        },
        {
            text: 'Memoir',
            img: 'naver.svg',
            link: data.urlLink.memoir,
            alt: '회고록 아이콘',
        },
    ];

    return (
        <ProjectPage>
            <FlexColumnDiv>
                <ExplainDiv>
                    <p className="title">{data.title}</p>
                    <p>
                        제작기간 : {data.startDate} ~ {data.endDate}
                    </p>
                </ExplainDiv>
                <ImageDiv>
                    {Array.from(Array(data?.imgList?.number).keys()).map((item) => (
                        <img
                            src={`${process.env.PUBLIC_URL}/img/project/${data?.imgList?.name}/${data?.imgList?.name}_${item}.jpg`}
                            alt="프로젝트 이미지"
                            width="100%"
                        />
                    ))}
                </ImageDiv>
                <ExplainDiv>
                    <p className="title">● 프로젝트 설명</p>
                    <p>{data.explain}</p>
                </ExplainDiv>
                <ExplainDiv>
                    <p className="title">● 서비스 주요 기능</p>
                    <div className="list">
                        {data.main.map((item) => (
                            <div>
                                <p>{item.title}</p>
                                <ul>
                                    {item.text.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </ExplainDiv>
                <ExplainDiv>
                    <p className="title">● 팀원별 역할</p>
                    <table>
                        <thead>
                            <th scope="col">이름</th>
                            <th scope="col">담당</th>
                            <th scope="col">역할</th>
                        </thead>
                        <tbody>
                            {data.team.map((item) => (
                                <tr className={item.name === '임미선' ? 'accent' : ''}>
                                    <td>{item.name}</td>
                                    <td>{item.part}</td>
                                    <td>{item.text}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ExplainDiv>
                <ExplainDiv>
                    <p className="title">● 내가 맡은 기능</p>
                    <p>
                        <ul>
                            {data.myPart.map((item) => (
                                <li style={{ margin: '5px 0' }}>{item}</li>
                            ))}
                        </ul>
                    </p>
                </ExplainDiv>
                <ExplainDiv>
                    <p className="title">● 기술스택</p>
                    <div className="skills">
                        {data.techStack.map((item) => (
                            <div>{item}</div>
                        ))}
                    </div>
                </ExplainDiv>
                <ExplainDiv>
                    <p className="title">● 느낀 점 / 어려웠던 점</p>
                    <div>
                        {data.impression.split('\n').map((item) => (
                            <p style={{ margin: '5px 0' }}>{item}</p>
                        ))}
                    </div>
                </ExplainDiv>
                <ButtonDiv>
                    {buttonList.map((item) => (
                        <button onClick={() => handleOpenPage(item.link)}>
                            <img src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt={item.alt} height="50%" />
                            {item.text}
                        </button>
                    ))}
                </ButtonDiv>
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

    p {
        margin: 0;
    }
`;

const ExplainDiv = styled.div`
    margin: 20px 0;

    color: ${({ theme }) => theme.color.defaultText};
    font-size: 0.9rem;

    .title {
        color: black;
        font-weight: bold;
        font-size: 1.1rem;

        margin-bottom: 5px;
    }

    .skills {
        display: flex;
        flex-direction: row;

        div {
            padding: 5px;
            margin: 0 5px 5px 0;

            color: white;

            background-color: ${({ theme }) => theme.color.main};
            border-radius: 5px;
        }
    }

    .list {
        margin: 10px 0 0 10px;

        p {
            font-size: 1rem;
            font-weight: bold;
        }

        ul {
            margin: 10px 0;
        }
    }

    table,
    th,
    td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    table {
        width: 100%;

        text-align: center;

        margin-top: 10px;

        th,
        td {
            padding: 10px;
        }

        .accent {
            color: ${({ theme }) => theme.color.accent};
            font-weight: bold;
        }
    }
`;

const ImageDiv = styled.div`
    img {
        margin: 10px 0;

        border: 1px solid ${({ theme }) => theme.color.border};
        box-shadow: 3px 3px 5px 1px #d8d8d8;
    }
`;

const ButtonDiv = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;

    margin: 20px 0 30px 0;

    button {
        all: unset;

        width: 160px;
        height: 50px;

        text-align: center;
        font-weight: bold;

        background-color: ${({ theme }) => theme.color.background};
        border-radius: 5px;

        cursor: pointer;

        img {
            vertical-align: middle;

            margin-right: 5%;
        }
    }
`;
