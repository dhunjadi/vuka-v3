import {professorList} from '../data/professorList';
import {studentList} from '../data/studentList';
import {StudentProps, ProfessorProps} from '../types/userTypes';

export const findStudentProps = (id: string): StudentProps | undefined => {
    return studentList.find((student) => student.userId === id);
};

export const findProfessorProps = (id: string): ProfessorProps | undefined => {
    return professorList.find((professor) => professor.userId === id);
};
