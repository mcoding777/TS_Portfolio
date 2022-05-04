import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SubTitle from '../SubTitle';

const Summary = () => {
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
