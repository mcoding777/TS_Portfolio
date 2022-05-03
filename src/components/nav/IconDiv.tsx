import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const IconDiv = () => {
    return (
        <Div>
            <Link to="..">
                <img src={`${process.env.PUBLIC_URL}/img/home.svg`} alt="홈으로 가기" />
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
