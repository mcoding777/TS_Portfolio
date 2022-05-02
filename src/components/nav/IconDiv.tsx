import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

interface LocationState {
    currentUserData: { id: number; name: string; job: string; user_skill: string[]; img: string; slug: string };
}

const IconDiv = ({ currentUserData }: LocationState) => {

    return (
        <Div>
            <Link to="..">
                <img src={`${process.env.PUBLIC_URL}/img/home.svg`} alt="홈으로 가기" />
            </Link>
            <Link to={`/${currentUserData.id}/mypage`} state={{ currentUserData }}>
                <img src={`${process.env.PUBLIC_URL}/img/cogOutline.svg`} alt="마이 페이지" />
            </Link>
        </Div>
    );
};

export default IconDiv;

const Div = styled.div`
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
