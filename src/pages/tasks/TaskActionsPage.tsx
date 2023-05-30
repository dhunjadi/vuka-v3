import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import ToggleSwitch from '../../components/ToggleSwitch';
import {studyProgramOptions} from '../../data/constants';
import Navbar from '../../components/navbar/Navbar';
import {v4 as uuidv4} from 'uuid';
import {Task} from '../../types/taskTypes';
import {addNewTaskAction, clearSelectedTaskAction, editTaskAction} from '../../store/actions/tasksActions';
import {StoreState} from '../../store/reducers/rootReducer';
import {useFormik} from 'formik';
import {taskActionsPageValidationSchema} from '../../validations/taskActionsPageValidaton';

const TaskActionsPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const {selectedTask} = useSelector((state: StoreState) => state.tasksReducer);

    const isEditing = pathname.includes('edit');

    const formik = useFormik<Task>({
        initialValues: {
            id: selectedTask.id || uuidv4(),
            title: selectedTask.title || '',
            text: selectedTask.text || '',
            studyProgram: selectedTask.studyProgram || '',
            subject: selectedTask.subject || '',
            year: selectedTask.year || 1,
            isPublished: selectedTask.isPublished || false,
        },
        validationSchema: taskActionsPageValidationSchema,
        onSubmit: () => {
            if (isEditing) {
                dispatch(editTaskAction(formik.values));
                dispatch(clearSelectedTaskAction());
                navigate('/tasks');
                return;
            }

            dispatch(addNewTaskAction(formik.values));
            navigate('/tasks');

            formik.resetForm();
        },
    });

    return (
        <>
            <Navbar />
            <div className="p-actions">
                <div className="p-actions__form">
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" placeholder="Enter Task Title..." {...formik.getFieldProps('title')} />
                        {formik.touched.title && formik.errors.title && <p>{formik.errors.title}</p>}

                        <textarea cols={30} rows={10} placeholder="Enter Task Text..." {...formik.getFieldProps('text')} />
                        {formik.touched.text && formik.errors.text && <p>{formik.errors.text}</p>}

                        <div className="p-actions__form_pair p-actions__form_pair--grid">
                            Program:
                            <select {...formik.getFieldProps('studyProgram')}>
                                {studyProgramOptions.map((option) => (
                                    <option key={option.id} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            Year:
                            <select {...formik.getFieldProps('year')}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>

                        <div className="p-actions__form_pair p-actions__form_pair--grid">
                            Subject:
                            <select {...formik.getFieldProps('subject')}>
                                <option value={''}>---</option>
                                <option value={'abc'}>abc</option>
                                <option value={'def'}>def</option>
                            </select>
                            Published:
                            <ToggleSwitch id="isPublished" isOn={formik.values.isPublished} {...formik.getFieldProps('isPublished')} />
                        </div>

                        <div className="p-actions__form_buttons">
                            <button className="btn btn--primary" onClick={() => navigate('/tasks')}>
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

export default TaskActionsPage;
