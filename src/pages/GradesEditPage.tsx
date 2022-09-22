import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import TextInput from '../components/TextInput';
import {gradeOptions, semesterOptions} from '../data/constants';
import Navbar from '../components/navbar/Navbar';
import {StoreState} from '../store/reducers/rootReducer';
import {IClass} from '../data/userList';
import {editClassAction} from '../store/actions/userActions';

const GradesEditPage = (): JSX.Element => {
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {selectedClass} = useSelector((state: StoreState) => state.userReducer);

    const [classInfo, setClassInfo] = useState<IClass>({
        studentId: selectedClass.studentId,
        id: selectedClass.id,
        title: selectedClass.title,
        semester: selectedClass.semester,
        ects: selectedClass.ects,
        exam1: selectedClass.exam1,
        exam2: selectedClass.exam2,
        essay: selectedClass.essay,
        presentation: selectedClass.presentation,
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>): void => {
        const {name, value} = e.target;

        setClassInfo((prev) => {
            if (name === 'semester' || name === 'exam1' || name === 'exam2' || name === 'essay' || name === 'presentation') {
                const selected = Number(value);
                return {...prev, [name]: selected};
            }

            if (name === 'ects') {
                return {...prev, [name]: Number(value)};
            }
            return {...prev, [name]: value};
        });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(editClassAction(classInfo));
        setClassInfo({studentId: '', id: '', title: '', semester: 1, ects: 0, exam1: 0, exam2: 0, essay: 0, presentation: 0});
        navigate(`/grades`);
    };

    return (
        <>
            <Navbar />
            <div className="p-actions">
                <div className="p-actions__form">
                    <form onSubmit={handleFormSubmit}>
                        <TextInput
                            type="text"
                            name="title"
                            placeholder="Enter Article Title..."
                            value={classInfo.title}
                            onChange={handleChange}
                            disabled={loggedInUser.role !== 'admin'}
                        />

                        <div className="p-actions__form_pair">
                            <select name="semester" value={classInfo.semester} onChange={handleChange}>
                                {semesterOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            <select name="ects" value={classInfo.ects} onChange={handleChange}>
                                {gradeOptions.map((grade) => (
                                    <option key={grade.label} value={grade.value}>
                                        {grade.label}
                                    </option>
                                ))}
                            </select>

                            <select name="exam1" value={classInfo.exam1} onChange={handleChange}>
                                {gradeOptions.map((grade) => (
                                    <option key={grade.label} value={grade.value}>
                                        {grade.label}
                                    </option>
                                ))}
                            </select>

                            <select name="exam2" value={classInfo.exam2} onChange={handleChange}>
                                {gradeOptions.map((grade) => (
                                    <option key={grade.label} value={grade.value}>
                                        {grade.label}
                                    </option>
                                ))}
                            </select>

                            <select name="essay" value={classInfo.essay} onChange={handleChange}>
                                {gradeOptions.map((grade) => (
                                    <option key={grade.label} value={grade.value}>
                                        {grade.label}
                                    </option>
                                ))}
                            </select>

                            <select name="presentation" value={classInfo.presentation} onChange={handleChange}>
                                {gradeOptions.map((grade) => (
                                    <option key={grade.label} value={grade.value}>
                                        {grade.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="p-actions__form_buttons">
                            <button className="btn btn--primary" onClick={() => navigate('/news')}>
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
