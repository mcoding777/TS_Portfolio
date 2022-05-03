import styled from 'styled-components';
import { ContainerDiv } from '../../components';
import { NavLeftPage, NavRightPage } from '.';
import React from 'react';

const NavPage: React.FC = () => {
    return (
        <BackgroundDiv>
            <NavContainerDiv>
                <NavLeftPage />
                <NavRightPage />
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
        height: 100%;
    }

    .nav_right {
        width: 80%;
        height: 100%;
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
