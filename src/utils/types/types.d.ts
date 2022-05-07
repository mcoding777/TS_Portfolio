declare module 'ProjectModule' {
    export interface ProjectCardI {
        index?: number;
        title: string;
        startDate: string;
        endDate: string;
        techStack: Array<string>;
        explain: string;
        gifSrc?: blob | string;
        thumbnail?: blob | string;
        imgList?: {
            name: string;
            number: number;
        };
        main: {
            title: string;
            text: string[];
        }[];
        team: {
            name: string;
            part: string;
            text: string;
        }[];
        myPart: string[];
        impression: string;
        urlLink: {
            demo: string;
            github: string;
            prototype: string;
        };
    }
}













// 정리 예정

declare module 'AboutMePageModuel' {
    export namespace aboutMeProps {
        interface AboutMePageProps {
            userName: string;
            userContents: string[];
        }
        interface SkillsProps {
            skillTitles: string | undefined;
            skillDescriptions: string[] | [];
            isEditMode: boolean;
            skillTagData: { title: string; description: string[] }[];
        }
        interface SkillTagProps {
            // skill: string[];
            // skillDescriptions: { title: string; description: string[] }[];
            skill: string | undefined;
            targetSkill: string | undefined;
            //추후 수정이 필요할듯 (any)
            onSkillChange: any;
            isEditMode: boolean;
            onDeleteSkill: (e: React.SyntheticEvent<HTMLSpanElement>) => void;
        }
        interface SkillsDetailProps {
            skillTitles: string | undefined;
            skillDescriptions: string[] | [];
            isEditMode: boolean;
            skillTagData: { title: string; description: string[] }[];
            updateSkillTagData: (
                target: 'title' | 'description',
                targetSkill: string | undefined,
                newDescription: string[] | undefined,
            ) => void;
        }
        interface ResumeProps {
            title: string;
            resumeDetail: {
                year: number;
                detail: {
                    detailTitle: string;
                    detailDescriptions: string | null;
                }[];
            }[];
            isEditMode: boolean;
        }
    }
}

declare module 'LoginModule' {
    export namespace LoginSpace {
        interface LoginContainerProps {
            children: React.ReactNode;
        }

        interface LoginUserProps {
            id: string;
            email: string;
            name: string;
        }

        interface SignUpProps extends LoginUserProps {
            job: string;
        }

        type SignUpPageProps = 0 | 1;
    }

    export namespace RequestTokenSpace {
        interface GoogleToken {
            auth_token: string;
        }
    }
}

declare module 'InformationModule' {
    export namespace UserSpace {
        interface Job {
            id: number;
            name: string;
        }
    }
}

declare module 'ProjectPageModule' {
    export namespace ProjectProps {
        interface UrlLink {
            linkName?: string;
            linkUrl?: string;
        }
        interface ProjectDetail {
            id?: string;
            title: string;
            startDate: string;
            endDate: string;
            techStack: Array<string>;
            explain: string;
            gifSrc?: blob | string;
            imgSrc?: blob | string;
            urlLink: string;
            /*
            아이디 번호
            프로젝트 제목
            제작시작일자
            제작종료일자
            기술스택
            프로젝트 설명
            마우스 올리면 나올 GIF
            기본 상태의 프로젝트 사진
            */
        }
    }
}

declare module 'PublicComponentModule' {
    export namespace PublicComponentProps {
        interface SubtitleProps {
            text: string;
            onCancelClick: () => any;
        }
    }
}

declare module 'MyPageModule' {
    export namespace MyPageProps {
        interface MyPageProps {
            imgSrc?: string;
            id: string;
            userName: string;
            userJobGroup: string;
            account?: string;
        }

        interface SubTitleProps {
            text: string;
        }

        interface ProfileImgProps {
            imgSrc?: string;
        }

        interface ProfileImgChangeProps extends ProfileImgProps {
            changeImg(): void;
            editMode: boolean;
        }

        interface UserInfoBoxProps {
            userData: {
                id: string;
                userName: string;
                userJobGroup: string;
                account?: string;
                img?: string;
            };
            editMode: boolean;
        }
    }
}

declare module 'HomeModule' {
    export namespace HomeProps {
        interface UserInfoProps {
            id: number;
            name: string;
            job: string;
            user_skill: string;
            img: string;
            slug: string;
        }
        interface IFilterProps {
            isActive: boolean;
        }
        interface ImageProps {
            image: string;
        }
    }
}

declare module 'TeamIntroModule' {
    export namespace TeamIntroProps {
        interface MemberDataProps {
            name: string;
            img: string | undefined;
            github: string | undefined;
            portfolio: string | undefined;
            introduction: string | undefined;
        }
        interface MemberImageProps {
            isData: boolean;
        }
    }
}

declare module 'aos';
declare module 'RecoilModule' {
    export namespace RecoilProps {
        interface aboutMeEditProps {
            id: string;
            editMode: boolean;
        }
        interface aboutMeSummaryProps {
            summary: string;
        }
        interface skills {
            id: number;
            name: string;
        }
    }
}

declare module 'ButtonModule' {
    interface ButtonProps {
        type: 'submit' | 'button';
        text: string;
        className: 'blue' | 'gray'; // 버튼 컬러 바꾸기용
        width?: string;
        height?: string;
    }
}

declare module 'ContactModule' {
    export namespace ContactSpace {
        interface ContactInformation {
            email: string;
            name: string;
            github: string;
        }
    }
}

declare module 'AutoCompleteModule' {
    export namespace AutoCompleteSpace {
        interface autoCompleteProps {
            data: { id: number; name: string }[];
            searchWord: string;
            autoTagClickSkill: (e: React.MouseEvent<HTMLDivElement>) => void;
        }
    }
}
