import React from 'react';
import { SubTitle, Section } from '../../components';

const ProjectPage: React.FC = ({ children }): JSX.Element => {
    return (
        <Section>
            <SubTitle text="📂 Project" />
            {children}
        </Section>
    );
};

export default ProjectPage;
