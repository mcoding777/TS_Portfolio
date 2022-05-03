import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const NavLeftPage: React.FC = (): JSX.Element => {
    const { pathname } = useLocation();

    const links = [
        { url: 'aboutme', text: 'About me' },
        { url: 'project', text: 'Project' },
        { url: 'contact', text: 'Contact' },
    ];

    const openSns = (sns: string): void => {
        window.open(`${sns === 'github' ? 'https://github.com/mcoding777' : 'https://blog.naver.com/mcoding777'}`);
    };

    return (
        <NavLeftDiv className="nav_left">
            <UserDiv>
                <img src={`${process.env.PUBLIC_URL}/img/profile.jpg`} alt="사용자 이미지" />
            </UserDiv>
            <UserName>
                임미선
                <br />
                (Lim Mi Sun)
            </UserName>
            <NavLinkDiv>
                {links.map((link) => (
                    <Link to={link.url} key={link.text} className={pathname.includes(link.url) ? 'active' : 'inactive'}>
                        {link.text}
                    </Link>
                ))}
            </NavLinkDiv>
            <IconDiv>
                <input
                    type="image"
                    src={`${process.env.PUBLIC_URL}/img/github.svg`}
                    alt="깃허브 이미지"
                    onClick={() => openSns('github')}
                />
                <input
                    type="image"
                    src={`${process.env.PUBLIC_URL}/img/naver.svg`}
                    className="naver"
                    alt="네이버 이미지"
                    onClick={() => openSns('naver')}
                />
            </IconDiv>
        </NavLeftDiv>
    );
};

export default NavLeftPage;

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
    flex-direction: row;

    input {
        width: 30px;

        margin: 0 10px;

        filter: invert(4%) sepia(3%) saturate(653%) hue-rotate(314deg) brightness(94%) contrast(85%);

        cursor: pointer;
    }
`;

const UserDiv = styled.div`
    margin: 10% auto;
    background-color: white;
    border-radius: 50%;

    width: 8vw;
    height: 8vw;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 10px solid ${(props) => props.theme.color.accent};

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
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
        margin: 5px 0;

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
