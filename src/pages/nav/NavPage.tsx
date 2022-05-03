import styled from 'styled-components';
import { useOutlet, Link, useLocation } from 'react-router-dom';
import { ContainerDiv } from '../../components';
import React from 'react';

const NavPage: React.FC = () => {
    const outlet = useOutlet();

    const { pathname } = useLocation();

    const links = [
        { url: 'aboutme', text: 'About me' },
        { url: 'project', text: 'Project' },
        { url: 'contact', text: 'Contact' },
    ];

    return (
        <BackgroundDiv>
            <NavContainerDiv>
                <NavLeftDiv className="nav_left">
                    <IconDiv>
                        <Link to="..">
                            <img src={`${process.env.PUBLIC_URL}/img/home.svg`} alt="홈으로 가기" />
                        </Link>
                    </IconDiv>
                    <UserDiv>
                        <img src="" alt="사용자 이미지" />
                    </UserDiv>
                    <UserName>
                        임미선
                        <br />
                        (Lim Mi Sun)
                    </UserName>
                    <NavLinkDiv>
                        {links.map((link) => (
                            <Link
                                to={link.url}
                                key={link.text}
                                className={pathname.includes(link.url) ? 'active' : 'inactive'}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </NavLinkDiv>
                </NavLeftDiv>
                <NavRightDiv className="nav_right">
                    <ContentDiv className="content">{outlet}</ContentDiv>
                </NavRightDiv>
            </NavContainerDiv>
        </BackgroundDiv>
    );
};

export default NavPage;

const BackgroundDiv = styled.div`
    background-color: ${(props) => props.theme.color.background};

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

// 페이지
const NavContainerDiv = styled(ContainerDiv)`
    height: 70vh;
    width: 100%;
    min-height: 480px;

    display: flex;
    flex-direction: row;

    .nav_left {
        width: 20%;
    }

    .nav_right {
        width: 80%;
    }
`;

// 왼쪽 네비게이션 영역
const NavLeftDiv = styled.div`
    color: ${(props) => props.theme.color.sub};
    font-weight: bold;

    background: ${(props) => props.theme.color.main};
    border-radius: 30px 0 0 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const IconDiv = styled.div`
    display: flex;
    margin-top: 2vh;
    margin-right: 1vw;
    margin-left: auto;

    a {
        opacity: 0.8;
    }

    a:hover {
        opacity: 1;
        transform: scale(1.2);
    }
`;

const UserDiv = styled.div`
    margin: 10% auto 10% auto;
    background-color: ${(props) => props.theme.color.background};
    border-radius: 50%;

    width: 150px;
    min-width: 100px;
    height: 150px;
    min-height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 10px solid ${(props) => props.theme.color.sub};

    img {
        padding: 7%;
        width: 80%;
    }
`;

const UserName = styled.div`
    font-size: 1.5em;
    text-align: center;
`;

const NavLinkDiv = styled.div`
    margin: 20%;

    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-weight: bold;

    a {
        all: unset;

        width: 80%;
        padding: 10px;
        margin: 10px 0;

        text-align: center;
        color: white;

        cursor: pointer;
    }

    .active {
        background-color: #5185dd;
        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }

    .inactive {
        :hover {
            transform: scale(1.2);
        }
    }
`;

// 오른쪽 네비게이션 영역
const NavRightDiv = styled.div`
    border-radius: 0 30px 30px 0;
    width: 82%;
    min-width: 700px;
    height: 100%;
    background-color: white;
    overflow-y: auto;

    ::-webkit-scrollbar {
        display: none;
    }
`;

//오른쪽 컨텐츠 영역
const ContentDiv = styled.div`
    min-width: 400px;
    height: 98%;
    background-color: white;
    overflow-y: auto;
    scrollbar-width: none;
    padding: 2.5%;
`;

// 사용자 이미지
const UserPictureDiv = styled.div`
    margin: 10% auto 0 auto;
    background-color: ${(props) => props.theme.color.background};
    border-radius: 50%;

    width: 150px;
    min-width: 100px;
    height: 150px;
    min-height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 10px solid ${(props) => props.theme.color.sub};

    img {
        padding: 7%;
        width: 80%;
    }
`;
