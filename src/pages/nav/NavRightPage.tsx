import styled from 'styled-components';
import { useOutlet } from 'react-router-dom';
import React from 'react';

const NavRightPage: React.FC = () => {
    const outlet = useOutlet();

    return (
        <NavRightDiv className="nav_right">
            <ContentDiv className="content">{outlet}</ContentDiv>
        </NavRightDiv>
    );
};

export default NavRightPage;

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

const ContentDiv = styled.div`
    min-width: 400px;
    height: 98%;
    background-color: white;
    overflow-y: auto;
    scrollbar-width: none;
    padding: 2.5%;
`;
