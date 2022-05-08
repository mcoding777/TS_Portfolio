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
        imgList: {
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
            memoir: string;
        };
    }
}
