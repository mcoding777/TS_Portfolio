import styled from 'styled-components';
import { useOutlet } from 'react-router-dom';
import React from 'react';

const NavRightPage: React.FC = (): JSX.Element => {
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
    background-color: white;
`;

const ContentDiv = styled.div`
    height: 100%;
    box-sizing: border-box;
    padding: 2.5%;

    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 100px;
        margin: 20px 0;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: ${({ theme }) => theme.color.main};
    }
`;
