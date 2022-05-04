import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SubTitle from '../SubTitle';

const Summary = () => {
    const summaryState = ['안녕하세요! depth를 알 수 없는 예비 프론트엔드 개발자 임미선입니다'];

    const editTextRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (editTextRef === null || editTextRef.current === null) {
            return;
        }
        handleResizeTextAreaHeight();
    }, []);

    const handleResizeTextAreaHeight = useCallback(() => {
        if (editTextRef === null || editTextRef.current === null) {
            return;
        }
        editTextRef.current.style.height = '100px';
        editTextRef.current.style.height = editTextRef.current.scrollHeight + 'px';
    }, []);

    return (
        <Div>
            <SubTitle text="🧑‍💻 About me" />
            <ContentsArea>
                {summaryState.map((item, idx) => (
                    <UserIntroduce key={idx}>{item}</UserIntroduce>
                ))}
            </ContentsArea>
        </Div>
    );
};

export default Summary;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
`;

const ContentsArea = styled.div`
    font-size: 17px;
    font-weight: 400;
    margin-top: 15px;
`;

const UserIntroduce = styled.div`
    font-size: 16px;
    margin-bottom: 3px;
`;
