import React from 'react';
import styled from 'styled-components';
import SubTitle from '../SubTitle';

const Skills = () => {
    return (
        <Div>
            <SubTitle text="🔨 Skills" />
            <TagArea />
        </Div>
    );
};

export default Skills;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TagArea = styled.div`
    padding: 5px 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
    flex-wrap: wrap;
`;
