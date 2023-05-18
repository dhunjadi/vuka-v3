import * as Yup from 'yup';

export const gradesEditPageValidationSchema = Yup.object({
    studentId: Yup.string().required('Unknown Student ID'),
    id: Yup.string().required('Unknown ID'),
    title: Yup.string().required('Unknown Title'),
    semester: Yup.number().required('Unknows Semester'),
    ects: Yup.number().required('Unknows ECTS'),
    exam1: Yup.number().required('Unknows Exam1'),
    exam2: Yup.number().required('Unknows Exam2'),
    essay: Yup.number().required('Unknows Essay'),
    presentation: Yup.number().required('Unknows Presentation'),
});
