import styled from 'styled-components';
import { Summary, Skills } from '../../components';
import { Resume } from '../../components/about-me';
import React from 'react';

const AboutMePage = () => {

    return (
        <Div>
            <Summary />
            <Skills />
            <Resume />
        </Div>
    );
};

export default AboutMePage;

const Div = styled.div`
    padding: 20px;
    box-sizing: border-box;
`;
