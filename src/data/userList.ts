import {IBook} from './bookList';

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
    studyType: string;
    year: number;
    books: IBook[];
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
        studyProgram: 'Hospitality',
        studyType: 'Full time',
        year: 2,
        books: [],
        classes: [],
    },
    {
        id: '2',
        fName: 'Luka',
        lName: 'Lukic',
        email: 'llukic@vuka.hr',
        password: 'vukastudent',
        role: 'student',
        studyProgram: 'Hospitality',
        studyType: 'Full time',
        year: 1,
        books: [],
        classes: [],
    },
    {
        id: '3',
        fName: 'Marko',
        lName: 'Markovic',
        email: 'mmarkovic@vuka.hr',
        password: 'vukaprof',
        role: 'professor',
        studyProgram: 'Professor',
        studyType: 'Professor',
        year: 6,
        books: [],
        classes: [],
    },
    {
        id: '4',
        fName: 'Stipe',
        lName: 'Stipic',
        email: 'sstipic@vuka.hr',
        password: 'vukastudent',
        role: 'student',
        studyProgram: 'Hospitality',
        studyType: 'Full time',
        year: 2,
        books: [],
        classes: [],
    },
    {
        id: '5',
        fName: 'Pero',
        lName: 'Peric',
        email: 'ppericic@vuka.hr',
        password: 'vukastudent',
        role: 'student',
        studyProgram: 'Hospitality',
        studyType: 'Full time',
        year: 1,
        books: [],
        classes: [],
    },
    {
        id: '6',
        fName: 'Dario',
        lName: 'Daric',
        email: 'ddaric@vuka.hr',
        password: 'vukaprof',
        role: 'professor',
        studyProgram: 'Professor',
        studyType: 'Professor',
        year: 6,
        books: [],
        classes: [],
    },
    {
        id: '7',
        fName: 'Admin',
        lName: 'Adminic',
        email: 'admin@vuka.hr',
        password: 'vukaadmin',
        role: 'admin',
        studyProgram: 'Admin',
        studyType: 'Admin',
        year: 7,
        books: [],
        classes: [],
    },
];

export default userList;
