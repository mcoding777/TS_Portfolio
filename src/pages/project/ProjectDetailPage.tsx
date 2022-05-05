import { ProjectDetail, SubTitle } from '../../components';
import React, { useState } from 'react';

const ProjectDetailPage = () => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const handleChangeToggle = () => {
        setEditMode((current) => !current);
    };
    return (
        <>
            <SubTitle text={`📂 Project`} />
            <ProjectDetail handleChangeToggle={handleChangeToggle} editMode={editMode} />
        </>
    );
};

export default ProjectDetailPage;
