import * as Yup from 'yup';

export const taskActionsPageValidationSchema = Yup.object({
    id: Yup.string().required('Unknown ID'),
    title: Yup.string().required('Title is required'),
    text: Yup.string().required('Text is required'),
    studyProgram: Yup.string().required('Study program is required'),
    subject: Yup.string().required('Subject program is required'),
    year: Yup.number().required('Year is required'),
    isPublished: Yup.boolean().required('Required'),
});
