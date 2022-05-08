import styled from 'styled-components';
import { ContainerDiv } from '../../components';
import { NavLeftPage, NavRightPage } from '.';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavPage: React.FC = (): JSX.Element => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem('login')) {
            navigate('/');
        }
    }, [navigate]);

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
