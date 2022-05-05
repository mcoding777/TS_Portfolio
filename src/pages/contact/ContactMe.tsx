import styled from 'styled-components';
import React from 'react';
import { SubTitle } from '../../components';
import emailjs from '@emailjs/browser';
import { contactList } from '../../utils/secret/contact';

const ContactMe = () => {
    // send it 버튼 눌렀을 때
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID || '',
                process.env.REACT_APP_TEMPLATE_ID || '',
                event.currentTarget,
                process.env.REACT_APP_USER_ID,
            )
            .then((result) => console.log(result.text))
            .catch((error) => console.log(error.text));
    };

    return (
        <ContainerArticle>
            <SubTitle text="📍 Contact me" />
            <ContentsDiv>
                <UserDiv>
                    {contactList.map((item) => (
                        <UserRowDiv key={item.title}>
                            <div className="title">{item.title}</div>
                            <div>{item.text}</div>
                        </UserRowDiv>
                    ))}
                </UserDiv>
                <EmailForm onSubmit={handleSubmit}>
                    <p>📮 ask me </p>
                    <InputDiv>
                        <input type="text" name="from_name" placeholder="이름" />
                        <input type="text" name="from_email" placeholder="이메일" />
                        <button type="submit">send it</button>
                    </InputDiv>
                    <textarea name="message" />
                </EmailForm>
            </ContentsDiv>
        </ContainerArticle>
    );
};

export { ContactMe };

// styled-components

const ContainerArticle = styled.article`
    display: flex;
    flex-direction: column;
`;

const ContentsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const UserDiv = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 5px;

    width: 90%;

    margin-top: 5px;
`;

const UserRowDiv = styled.div`
    display: flex;
    flex-direction: row;

    width: 40%;

    .title {
        font-weight: bold;

        width: 30%;
    }
`;

const EmailForm = styled.form`
    display: grid;
    grid-template-rows: 1fr 1fr 10fr;

    row-gap: 10px;

    width: 90%;
    height: 40vh;

    margin-top: 20px;
    padding: 20px 30px;

    background-color: #f5f5f5;

    border-radius: 10px;

    & p {
        margin: 0;

        font-weight: bold;
    }

    & textarea {
        all: unset;

        height: 90%;
        padding: 10px;

        border: 1px solid #e0e0e0;
        background-color: white;
    }
`;

const InputDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    column-gap: 20px;

    & input {
        all: unset;

        height: 40px;
        width: 90%;

        padding: 0 10px;

        border: 1px solid ${({ theme }) => theme.color.border};
        border-radius: 5px;
        background-color: white;

        &::placeholder {
            font-size: 0.8rem;
        }
    }

    & button {
        all: unset;

        height: 20px;

        padding: 10px;

        border-radius: 5px;
        background-color: #5993f6;

        text-align: center;
        font-family: 'Montserrat', 'sans-serif';
        font-weight: bold;
        color: white;
    }
`;
