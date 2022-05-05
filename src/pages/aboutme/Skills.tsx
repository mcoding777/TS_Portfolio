import React from 'react';
import styled from 'styled-components';
import { SubTitle, Section } from '../../components';
import { skillList } from '../../utils/secret/aboutme';

const Skills: React.FC = (): JSX.Element => {
    return (
        <Section>
            <SubTitle text="🔨 Skills" />
            <TagDiv>
                {skillList.map((item) => (
                    <div key={item}>{item}</div>
                ))}
            </TagDiv>
        </Section>
    );
};

export default Skills;

const TagDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div {
        padding: 5px;
        margin: 0 5px 5px 0;

        color: white;

        background-color: ${({ theme }) => theme.color.main};
        border-radius: 5px;
    }
`;
