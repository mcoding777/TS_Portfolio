import styled from 'styled-components';
import React from 'react';

interface IProps {
    handleChangeToggle: (...args: any[]) => void;
    editMode: boolean;
}

const ProjectDetail: React.FunctionComponent<IProps> = () => {

    const handleSubmit = (e: any) => {
        e?.preventDefault();
    };
            // const data: ProjectProps.ProjectDetail = {
            //     title: '프로젝트 토끼토끼',
            //     startDate: '2021-01-31',
            //     endDate: '2021-02-28',
            //     techStack: ['Django', 'Flask', 'TypeScript'],
            //     imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
            //     gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
            //     explain: '프로젝트설명0',
            //     urlLink: [
            //         { linkName: 'Live Demo', linkUrl: 'https://youtube.com' },
            //         { linkName: 'Github', linkUrl: 'https://github.com' },
            //     ],
            // };

    return (
        <DetailForm onSubmit={handleSubmit}>
                {/* <ImgEdit
                    editMode={editMode}
                    source={imgSrc}
                    alt="프로젝트 이미지"
                    setSrc={setImgSrc}
                    handleShowPreview={handleShowImgPreview}
                    accept="png, .jpg, .jpeg, .svg"
                /> */}
            <h2>프로젝트 설명</h2>
        </DetailForm>
    );
};

export default ProjectDetail;

const DetailForm = styled.form`
    font-family: 'Montserrat', 'EliceRegular';
    margin-top: 3%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    height: 100%;
    label {
        font-weight: bold;
    }

    button {
        border: 1px solid black;
        margin: auto;
    }

    h2 {
        border-bottom: 1px solid black;
        margin: 2% 0;
    }
`;