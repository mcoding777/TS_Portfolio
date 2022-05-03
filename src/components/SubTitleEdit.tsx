import styled from 'styled-components';
import React from 'react';

interface Props {
    text: string;
    onClick?: (...args: any[]) => any;
    section?: string;
}

const SubTitleEdit = ({ text, onClick }: Props) => {
    return (
        <SubTitleDiv>
            <TitleDiv>{text}</TitleDiv>
            <EditButtonDiv onClick={onClick}>
                <img src={`${process.env.PUBLIC_URL}/img/edit.svg`} alt="수정" />
            </EditButtonDiv>
        </SubTitleDiv>
    );
};

export default SubTitleEdit;
const SubTitleDiv = styled.div`
    display: flex;
    margin: 10px 0px;
    padding-bottom: 5px;
    border-bottom: 1px solid #bdbdbd;
`;

const TitleDiv = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    text-align: left;
`;

const EditButtonDiv = styled.div`
    margin-left: auto;
`;
