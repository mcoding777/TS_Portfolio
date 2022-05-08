import styled from 'styled-components';
import { useOutlet, useLocation } from 'react-router-dom';
import React, { useRef, RefObject, useEffect } from 'react';

const NavRightPage: React.FC = (): JSX.Element => {
    const outlet = useOutlet();

    const { pathname } = useLocation();
    const scrollRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <NavRightDiv className="nav_right">
            <ContentDiv ref={scrollRef}>{outlet}</ContentDiv>
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

    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 50px;

    box-sizing: border-box;
    padding: 30px 50px;

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
