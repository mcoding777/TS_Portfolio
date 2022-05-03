import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

const Login: React.FC = (): JSX.Element => {
    const navigate = useNavigate();

    // 메인 페이지로 이동 (로그인 성공)
    function moveMain(): void {
        navigate('/main');
    }

    return (
        <ContainerArticle>
            <FormDiv>
                <TitleP>
                    안녕하세요! <span>예비 프론트엔드 개발자, 임미선</span>입니다
                </TitleP>
                <TextP>
                    채용 담당자님, 이력서에 적힌
                    <br />
                    아이디와 비밀번호를 입력해주세요 😄
                </TextP>
                <InformationDiv>
                    <RowDiv>
                        <p>ID</p>
                        <LoginInput type="text" placeholder="이름" />
                    </RowDiv>
                    <RowDiv>
                        <p>PASSWORD</p>
                        <LoginInput type="password" placeholder="패스워드" />
                    </RowDiv>
                </InformationDiv>
                <Button type="button" text="고고!" className="blue" onClick={moveMain} />
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

    background-color: ${({ theme }) => theme.color.background};
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

    margin: 0;

    span {
        color: ${({ theme }) => theme.color.main};
    }
`;

const InformationDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 30px 0;
`;

const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 20vw;
`;

// 이름, 직군 입력창
const LoginInput = styled.input`
    all: unset;
    display: block;

    padding: 10px;
    margin: 5px 0;
    width: 60%;

    border: 1px solid #e0e0e0;
    border-radius: 5px;

    color: ${({ theme }) => theme.color.defaultText};

    &::placeholder {
        font-size: 0.8rem;

        color: ${({ theme }) => theme.color.defaultText};
    }
`;

const TextP = styled.p`
    color: ${({ theme }) => theme.color.defaultText};

    text-align: center;
`;
