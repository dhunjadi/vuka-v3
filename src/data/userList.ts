interface IBooks {
    id: string;
    author: string;
    country: string;
    imageLink: string;
    language: string;
    link: string;
    pages: number;
    title: string;
    year: number;
    copiesAvailiable: number;
}

interface IClasses {
    title: string;
    semester: number;
    exam1: number;
    exam2: number;
    essay: number;
    presentation: number;
    ects: number;
}

export type UserRole = 'student' | 'professor' | 'admin' | undefined;

export interface IUser {
    id: string;
    fName: string;
    lName: string;
    email: string;
    password: string;
    role: UserRole;
    studyProgram: string;
    year: number;
    books: IBooks[];
    classes: IClasses[];
}

const userList: IUser[] = [
    {
        id: '1',
        fName: 'Ivan',
        lName: 'Ivanic',
        email: 'iivanic@vuka.hr',
        password: 'vukastudent',
        role: 'student',
        studyProgram: 'hospitality',
        year: 2,
        books: [],
        classes: [],
    },
    {
        id: '2',
        fName: 'Marko',
        lName: 'Markovic',
        email: 'mmarkovic@vuka.hr',
        password: 'vukaprof',
        role: 'professor',
        studyProgram: 'professor',
        year: 6,
        books: [],
        classes: [],
    },
    {
        id: '3',
        fName: 'Admin',
        lName: 'Adminic',
        email: 'admin@vuka.hr',
        password: 'vukaadmin',
        role: 'admin',
        studyProgram: 'admin',
        year: 7,
        books: [],
        classes: [],
    },
];

export default userList;
