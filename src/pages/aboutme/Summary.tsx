import React from 'react';
import { SubTitle, Section } from '../../components';
import { summaryText } from '../../utils/secret/aboutme';

const Summary: React.FC = (): JSX.Element => {
    return (
        <Section>
            <SubTitle text="🧑‍💻 About me" />
            <div>
                {summaryText.map((item, idx) => (
                    <p key={idx} style={{ margin: '5px 0' }}>
                        {item}
                    </p>
                ))}
            </div>
        </Section>
    );
};

export default Summary;
