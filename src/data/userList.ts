import dummyImage from '../assets/dummyImage.jpg';
import {User, UserRole} from '../types/userTypes';

export const userList: User[] = [
    {
        userId: '1',
        fName: 'Ivan',
        lName: 'Ivanic',
        email: 'iivanic@vuka.hr',
        password: 'vukastudent',
        imgSrc: dummyImage,
        role: UserRole.student,
    },
    {
        userId: '2',
        fName: 'Luka',
        lName: 'Lukic',
        email: 'llukic@vuka.hr',
        password: 'vukastudent',
        imgSrc: dummyImage,
        role: UserRole.student,
    },
    {
        userId: '3',
        fName: 'Marko',
        lName: 'Markovic',
        email: 'mmarkovic@vuka.hr',
        password: 'vukaprof',
        imgSrc: dummyImage,
        role: UserRole.professor,
    },
    {
        userId: '4',
        fName: 'Stipe',
        lName: 'Stipic',
        email: 'sstipic@vuka.hr',
        password: 'vukastudent',
        imgSrc: dummyImage,
        role: UserRole.student,
    },
    {
        userId: '5',
        fName: 'Pero',
        lName: 'Peric',
        email: 'ppericic@vuka.hr',
        password: 'vukastudent',
        imgSrc: dummyImage,
        role: UserRole.student,
    },
    {
        userId: '6',
        fName: 'Dario',
        lName: 'Daric',
        email: 'ddaric@vuka.hr',
        password: 'vukaprof',
        imgSrc: dummyImage,
        role: UserRole.professor,
    },
    {
        userId: '7',
        fName: 'Admin',
        lName: 'Adminic',
        email: 'admin@vuka.hr',
        password: 'vukaadmin',
        imgSrc: dummyImage,
        role: UserRole.admin,
    },
];

export default userList;
