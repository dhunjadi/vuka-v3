export enum UserRole {
    student = 'Student',
    professor = 'Professor',
    admin = 'Admin',
}

export enum StudyProgram {
    HOSPITALITY = 'Hospitality',
    MECHATRONICS = 'Mechatronics',
}

export enum StudyType {
    FULL_TIME = 'Full time',
    PART_TIME = 'Part time',
}

export enum ProfessorRank {
    DISTINGUISHED = 'Distinguished Professor',
    PROFESSOR = 'Professor',
    ASSOCIATE = 'Associate Professor',
    ASSISTANT_PROFESSOR = 'Assistant Professor',
    POSTDOC = 'Postdoctoral Fellow/Researcher',
    TEACHING_ASSISTANT = 'Teaching/Research Assistant',
    SENIOR_LECTURER = 'Senior Lecturer',
    LECTURER = 'Lecturer',
}

export type User = {
    userId: string;
    fName: string;
    lName: string;
    email: string;
    password: string;
    imgSrc: string;
    role: UserRole;
};

export type StudentProps = {
    userId: string;
    studyProgram: StudyProgram;
    studyType: StudyType;
    year: string;
};

export type ProfessorProps = {
    userId: string;
    rank: ProfessorRank;
};

export type AdminProps = {
    userId: string;
    type: 'Admin';
};
