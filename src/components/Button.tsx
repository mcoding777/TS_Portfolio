import styled from 'styled-components';
import React from 'react';

interface ButtonProps {
    type: 'submit' | 'button';
    text: string;
    className: 'blue' | 'gray'; // 버튼 컬러 바꾸기용
    width?: string;
    height?: string;
    onClick?(): void;
}

const Button = ({ type, text, className, width, height, onClick }: ButtonProps) => {
    return (
        <StyledButton type={type} className={className} width={width} height={height} onClick={onClick}>
            {text}
        </StyledButton>
    );
};

export { Button };

// styled-components

const StyledButton = styled.button<{
    className: string;
    width?: string;
    height?: string;
}>`
    all: unset;

    display: inline-block;

    width: ${(props) => (props.width ? props.width : '120px')};
    height: ${(props) => (props.height ? props.height : '40px')};

    text-align: center;
    color: white;

    background-color: ${(props) =>
        props.className === 'blue' ? props.theme.color.main : props.theme.color.buttonBackground};

    border-radius: 100px;

    cursor: pointer;
`;
