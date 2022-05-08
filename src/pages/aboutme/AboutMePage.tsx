import { Summary, Skills, Resume } from '.';
import React from 'react';

const AboutMePage: React.FC = (): JSX.Element => {
    return (
        <>
            <Summary />
            <Skills />
            <Resume />
        </>
    );
};

export default AboutMePage;
