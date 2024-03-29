import dummyImage from '../assets/dummyImage.jpg';
import {User, UserRole} from '../types/userTypes';

export const userList: User<UserRole>[] = [
    {
        id: '1',
        fName: 'Ivan',
        lName: 'Ivanic',
        email: 'iivanic@vuka.hr',
        password: 'vukastudent',
        imgSrc: dummyImage,
        role: {
            type: 'Student',
            student: {
                studyProgram: 'Hospitality',
                studyType: 'Full time',
                year: 2,
                books: [],
                classes: [
                    {
                        studentId: '1',
                        id: '1',
                        title: 'Basic Economics I',
                        semester: '1',
                        exam1: '4',
                        exam2: '5',
                        essay: '3',
                        presentation: '4',
                        ects: '5',
                    },
                    {
                        studentId: '1',
                        id: '2',
                        title: 'Business Mathematics I',
                        semester: '1',
                        exam1: '5',
                        exam2: '4',
                        essay: '3',
                        presentation: '3',
                        ects: '4',
                    },
                    {
                        studentId: '1',
                        id: '3',
                        title: 'Computer Science in Business I',
                        semester: '1',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '3',
                    },
                    {
                        studentId: '1',
                        id: '4',
                        title: 'Fundamentals of Tourism',
                        semester: '1',
                        exam1: '2',
                        exam2: '3',
                        essay: '3',
                        presentation: '4',
                        ects: '4',
                    },
                    {
                        studentId: '1',
                        id: '5',
                        title: 'Introduction to Professional and Scientific Work',
                        semester: '1',
                        exam1: '5',
                        exam2: '5',
                        essay: '5',
                        presentation: '3',
                        ects: '3',
                    },
                    {
                        studentId: '1',
                        id: '6',
                        title: 'Physical Education (PE) (1/4)',
                        semester: '1',
                        exam1: '2',
                        exam2: '2',
                        essay: '3',
                        presentation: '3',
                        ects: '0',
                    },
                    {
                        studentId: '1',
                        id: '7',
                        title: 'Tourism Geography I',
                        semester: '1',
                        exam1: '2',
                        exam2: '3',
                        essay: '4',
                        presentation: '5',
                        ects: '5',
                    },
                    {
                        studentId: '1',
                        id: '8',
                        title: 'Basic Economics II',
                        semester: '2',
                        exam1: '2',
                        exam2: '2',
                        essay: '2',
                        presentation: '2',
                        ects: '5',
                    },
                    {
                        studentId: '1',
                        id: '9',
                        title: 'Business Law',
                        semester: '2',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '3',
                    },
                    {
                        studentId: '1',
                        id: '10',
                        title: 'Business Mathematics II',
                        semester: '2',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '4',
                    },
                    {
                        studentId: '1',
                        id: '11',
                        title: 'Computer Science in Business II',
                        semester: '2',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '3',
                    },
                    {
                        studentId: '1',
                        id: '12',
                        title: 'Physical Education (PE) (2/4)',
                        semester: '2',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '0',
                    },
                    {
                        studentId: '1',
                        id: '13',
                        title: 'Tourism Economics',
                        semester: '2',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '4',
                    },
                    {
                        studentId: '1',
                        id: '14',
                        title: 'Tourism Geography II',
                        semester: '2',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '4',
                    },
                    {
                        studentId: '1',
                        id: '15',
                        title: 'Business Statistics I',
                        semester: '3',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '3',
                    },
                    {
                        studentId: '1',
                        id: '16',
                        title: 'Fundamentals of Accounting I',
                        semester: '3',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '4',
                    },
                    {
                        studentId: '1',
                        id: '17',
                        title: 'Fundamentals of Entrepreneurship',
                        semester: '3',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '4',
                    },
                    {
                        studentId: '1',
                        id: '18',
                        title: 'Fundamentals of Marketing',
                        semester: '3',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '4',
                    },
                    {
                        studentId: '1',
                        id: '19',
                        title: 'Hospitality Management (1/2)',
                        semester: '3',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '5',
                    },
                    {
                        studentId: '1',
                        id: '20',
                        title: 'Physical Education (PE) (3/4)',
                        semester: '3',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '0',
                    },
                    {
                        studentId: '1',
                        id: '21',
                        title: 'Tourism and Environment',
                        semester: '3',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '3',
                    },
                    {
                        studentId: '1',
                        id: '22',
                        title: 'Business Statistics II',
                        semester: '4',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '4',
                    },
                    {
                        studentId: '1',
                        id: '23',
                        title: 'Entrepreneurship in Hospitality',
                        semester: '4',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '5',
                    },
                    {
                        studentId: '1',
                        id: '24',
                        title: 'Fundamentals of Accounting II',
                        semester: '4',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '4',
                    },
                    {
                        studentId: '1',
                        id: '25',
                        title: 'Hospitality Management (2/2)',
                        semester: '4',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '5',
                    },
                    {
                        studentId: '1',
                        id: '26',
                        title: 'Marketing in Hospitality',
                        semester: '4',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '5',
                    },
                    {
                        studentId: '1',
                        id: '27',
                        title: 'Physical Education (PE) (4/4)',
                        semester: '4',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '0',
                    },
                    {
                        studentId: '1',
                        id: '28',
                        title: 'Business Finances (1/2)',
                        semester: '5',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '5',
                    },
                    {
                        studentId: '1',
                        id: '29',
                        title: 'Evaluation of Cultural Heritage in Tourism',
                        semester: '5',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '3',
                    },
                    {
                        studentId: '1',
                        id: '30',
                        title: 'Fundamentals of Management',
                        semester: '5',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '3',
                    },
                    {
                        studentId: '1',
                        id: '31',
                        title: 'Fundamentals of Special Forms of Tourism',
                        semester: '5',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '3',
                    },
                    {
                        studentId: '1',
                        id: '32',
                        title: 'International Trade',
                        semester: '5',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '3',
                    },
                    {
                        studentId: '1',
                        id: '33',
                        title: 'Travel Agency Managment',
                        semester: '5',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '3',
                    },
                    {
                        studentId: '1',
                        id: '34',
                        title: 'Business Finances (2/2)',
                        semester: '6',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '5',
                    },
                    {
                        studentId: '1',
                        id: '35',
                        title: 'Final Thesis',
                        semester: '6',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '6',
                    },
                    {
                        studentId: '1',
                        id: '36',
                        title: 'Practical Work',
                        semester: '6',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '7',
                    },
                    {
                        studentId: '1',
                        id: '37',
                        title: 'Tourist Market Research',
                        semester: '6',
                        exam1: '3',
                        exam2: '4',
                        essay: '5',
                        presentation: '5',
                        ects: '5',
                    },
                ],
            },
        },
    },
    {
        id: '2',
        fName: 'Luka',
        lName: 'Lukic',
        email: 'llukic@vuka.hr',
        password: 'vukastudent',
        imgSrc: dummyImage,
        role: {
            type: 'Student',
            student: {
                studyProgram: 'Hospitality',
                studyType: 'Full time',
                year: 1,
                books: [],
                classes: [],
            },
        },
    },
    {
        id: '3',
        fName: 'Marko',
        lName: 'Markovic',
        email: 'mmarkovic@vuka.hr',
        password: 'vukaprof',
        imgSrc: dummyImage,
        role: {
            type: 'Professor',
            professor: {
                rank: 'Assistant professor',
            },
        },
    },
    {
        id: '4',
        fName: 'Stipe',
        lName: 'Stipic',
        email: 'sstipic@vuka.hr',
        password: 'vukastudent',
        imgSrc: dummyImage,
        role: {
            type: 'Student',
            student: {
                studyProgram: 'Mechatronics',
                studyType: 'Full time',
                year: 2,
                books: [],
                classes: [],
            },
        },
    },
    {
        id: '5',
        fName: 'Pero',
        lName: 'Peric',
        email: 'ppericic@vuka.hr',
        password: 'vukastudent',
        imgSrc: dummyImage,
        role: {
            type: 'Student',
            student: {
                studyProgram: 'Mechatronics',
                studyType: 'Part time',
                year: 1,
                books: [],
                classes: [],
            },
        },
    },
    {
        id: '6',
        fName: 'Dario',
        lName: 'Daric',
        email: 'ddaric@vuka.hr',
        password: 'vukaprof',
        imgSrc: dummyImage,
        role: {
            type: 'Professor',
            professor: {
                rank: 'Assistant professor',
            },
        },
    },
    {
        id: '7',
        fName: 'Admin',
        lName: 'Adminic',
        email: 'admin@vuka.hr',
        password: 'vukaadmin',
        imgSrc: dummyImage,
        role: {
            type: 'Admin',
        },
    },
];

export default userList;
