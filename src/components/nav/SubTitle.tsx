import React from 'react';
import styled from 'styled-components';

const SubTitle = ({ text }: { text: string }) => {
    return (
        <SubTitleDiv>
            <TitleDiv>{text}</TitleDiv>
            <EditButtonDiv></EditButtonDiv>
        </SubTitleDiv>
    );
};

export default SubTitle;

const SubTitleDiv = styled.div`
    display: flex;
    margin: 10px 0px;
    padding-bottom: 5px;
    border-bottom: 1px solid #bdbdbd;
    margin-bottom: 2%;
`;

const TitleDiv = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    text-align: left;
`;

const EditButtonDiv = styled.div`
    margin-left: auto;
`;
