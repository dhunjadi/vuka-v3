import {Book} from './bookTypes';
import {Class} from './classTypes';

export const userRole: Record<string, UserRole['type']> = {
    student: 'Student',
    professor: 'Professor',
    admin: 'Admin',
};

export const studyPrograms: Record<string, StudyProgram> = {
    hospitality: 'Hospitality',
    mechatronics: 'Mechatronics',
};

export type StudyProgram = 'Hospitality' | 'Mechatronics';
export type StudyType = 'Full time' | 'Part time';

type ProfessorRank =
    | 'Distinguished Professor'
    | 'Professor'
    | 'Associate Professor'
    | 'Assistant professor'
    | 'Postdoctoral Fellow/Researcher'
    | 'Teaching/Research Assistant'
    | 'Senior Lecturer'
    | 'Lecturer';

export type User<TUser extends UserRole> = {
    id: string;
    fName: string;
    lName: string;
    email: string;
    password: string;
    imgSrc: string;
    role: TUser;
};

export type StudentRole = {
    type: 'Student';
    student: {
        studyProgram: StudyProgram;
        studyType: StudyType;
        year: number;
        books: Pick<Book, 'author' | 'title' | 'year' | 'imgSrc'>[];
        classes: Class[];
    };
};

export type ProfessorRole = {
    type: 'Professor';
    professor: {
        rank: ProfessorRank;
    };
};

export type AdminRole = {
    type: 'Admin';
};

export type UserRole = StudentRole | ProfessorRole | AdminRole;
