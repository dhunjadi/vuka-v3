import {StudyProgram} from './userTypes';

export interface News {
    id: string;
    title: string;
    text: string;
    studyProgram: StudyProgram | 'General';
    isPublished: boolean;
}
