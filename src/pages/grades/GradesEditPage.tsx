import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {gradeOptions, semesterOptions} from '../../data/constants';
import Navbar from '../../components/navbar/Navbar';
import {StoreState} from '../../store/reducers/rootReducer';
import {Class} from '../../data/userList';
import {editClassAction} from '../../store/actions/userActions';
import {useKeyPress} from '../../utils/UseKeyPress';
import {isAdmin} from '../../utils/userUtils';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const GradesEditPage = (): JSX.Element => {
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isEscPressed = useKeyPress('Escape');
    useEffect(() => {
        if (isEscPressed) navigate(`/grades/${selectedClass.studentId}`);
    }, [isEscPressed, navigate]);

    const {selectedClass} = useSelector((state: StoreState) => state.userReducer);

    const formik = useFormik<Class>({
        initialValues: {
            studentId: selectedClass.studentId,
            id: selectedClass.id,
            title: selectedClass.title,
            semester: selectedClass.semester,
            ects: selectedClass.ects,
            exam1: selectedClass.exam1,
            exam2: selectedClass.exam2,
            essay: selectedClass.essay,
            presentation: selectedClass.presentation,
        },
        validationSchema: Yup.object({
            studentId: Yup.string().required('Unknown Student ID'),
            id: Yup.string().required('Unknown ID'),
            title: Yup.string().required('Unknown Title'),
            semester: Yup.number().required('Unknows Semester'),
            ects: Yup.number().required('Unknows ECTS'),
            exam1: Yup.number().required('Unknows Exam1'),
            exam2: Yup.number().required('Unknows Exam2'),
            essay: Yup.number().required('Unknows Essay'),
            presentation: Yup.number().required('Unknows Presentation'),
        }),
        onSubmit: () => {
            dispatch(editClassAction(formik.values));
            navigate(`/grades/${selectedClass.studentId}`);
            formik.resetForm();
        },
    });

    return (
        <>
            <Navbar />
            <div className="p-actions">
                <div className="p-actions__form">
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter Article Title..."
                            disabled={!isAdmin(loggedInUser)}
                            {...formik.getFieldProps('title')}
                        />

                        <div className="p-actions__form_pair  p-actions__form_pair--grid">
                            Semester:
                            <select {...formik.getFieldProps('semester')}>
                                {semesterOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            ECTS:
                            <select {...formik.getFieldProps('ects')}>
                                {gradeOptions.map((grade) => (
                                    <option key={grade.label} value={grade.value}>
                                        {grade.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="p-actions__form_pair p-actions__form_pair--grid">
                            <span>Exam 1:</span>
                            <select {...formik.getFieldProps('exam1')}>
                                {gradeOptions.map((grade) => (
                                    <option key={grade.label} value={grade.value}>
                                        {grade.label}
                                    </option>
                                ))}
                            </select>
                            <span>Exam 2:</span>
                            <select {...formik.getFieldProps('exam2')}>
                                {gradeOptions.map((grade) => (
                                    <option key={grade.label} value={grade.value}>
                                        {grade.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="p-actions__form_pair p-actions__form_pair--grid">
                            Essay:
                            <select {...formik.getFieldProps('essay')}>
                                {gradeOptions.map((grade) => (
                                    <option key={grade.label} value={grade.value}>
                                        {grade.label}
                                    </option>
                                ))}
                            </select>
                            Presentation
                            <select {...formik.getFieldProps('presentation')}>
                                {gradeOptions.map((grade) => (
                                    <option key={grade.label} value={grade.value}>
                                        {grade.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="p-actions__form_buttons">
                            <button className="btn btn--primary" onClick={() => navigate(`/grades/${selectedClass.studentId}`)}>
                                Cancel
                            </button>

                            <button type="submit" className="btn btn--primary">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default GradesEditPage;
