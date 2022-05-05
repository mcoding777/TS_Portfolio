import React from 'react';
import styled from 'styled-components';
import { SubTitle, Section } from '../../components';
import { skillList } from '../../utils/secret/aboutme';

const Skills: React.FC = (): JSX.Element => {
    return (
        <Section>
            <SubTitle text="🔨 Skills" />
            <TagArea>
                {skillList.map((item) => (
                    <div key={item}>{item}</div>
                ))}
            </TagArea>
        </Section>
    );
};

export default Skills;

const TagArea = styled.div`
    padding: 5px 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
    flex-wrap: wrap;

    div {
        padding: 5px;
        margin-right: 5px;

        color: white;

        background-color: ${({ theme }) => theme.color.main};
        border-radius: 5px;
    }
`;
