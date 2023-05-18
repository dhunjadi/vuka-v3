import * as Yup from 'yup';

export const newsActionPageValidationSchema = Yup.object({
    id: Yup.string().required('Unknown ID'),
    title: Yup.string().required('Title is required'),
    text: Yup.string().required('Text is required'),
    studyProgram: Yup.string().required('Study program is required'),
    published: Yup.boolean().required('Required'),
});
