import { ProjectDetail } from '../../components';
import SubTitleEdit from '../../components/SubTitleEdit';
import React, { useState } from 'react';

const ProjectDetailPage = () => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const handleChangeToggle = () => {
        setEditMode((current) => !current);
    };
    return (
        <>
            <SubTitleEdit text={`📂 Project`} onClick={handleChangeToggle} />
            <ProjectDetail handleChangeToggle={handleChangeToggle} editMode={editMode} />
        </>
    );
};

export default ProjectDetailPage;
