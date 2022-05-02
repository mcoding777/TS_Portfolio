import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    // 로그인 여부 체크하기
    function isLogin(): void {
        if (sessionStorage.getItem('userProfile')) {
            alert('이미 로그인 중입니다. 홈으로 이동합니다.');
            navigate('/main');
        }
    }

    // 로그인 여부부터 확인하기
    useEffect(() => isLogin(), []);

    return (
        <ContainerArticle>
            <FormDiv>
                <TitleP>
                    안녕하세요! <span>예비 프론트엔드 개발자, 임미선</span>입니다
                </TitleP>
                <TextP>
                    채용 담당자님, 이력서에 적힌
                    <br />
                    아이디와 비밀번호를 입력해주세요 :)
                </TextP>
                <SignUpP>회원이 아니신가요?</SignUpP>
            </FormDiv>
        </ContainerArticle>
    );
};

export { Login };

// 배경 div
const ContainerArticle = styled.article`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.color.background}; ;
`;

// 흰색 배경 div
const FormDiv = styled.div`
    background-color: white;

    width: 60vw;
    height: 60vh;
    padding: 20px;

    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleP = styled.p`
    font-size: 1.5rem;
    font-weight: bold;

    span {
        color: ${({ theme }) => theme.color.main};
    }
`;

const TextP = styled.p`
    color: ${({ theme }) => theme.color.buttonText};

    text-align: center;
`;

const SignUpP = styled.p`
    color: ${({ theme }) => theme.color.defaultText};
    font-family: 'AppleSDGothicNeo', 'sans-serif';

    text-align: center;
    line-height: 1rem;

    margin: 5vh 0 1vh 0;
`;
