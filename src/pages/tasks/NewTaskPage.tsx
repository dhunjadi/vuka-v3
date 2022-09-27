import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import TextInput from '../../components/TextInput';
import ToggleSwitch from '../../components/ToggleSwitch';
import {studyProgramOptions} from '../../data/constants';
import Navbar from '../../components/navbar/Navbar';
import {v4 as uuidv4} from 'uuid';
import {ITask} from '../../data/taskList';
import {addNewTaskAction} from '../../store/actions/tasksActions';

const NewTaskPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [taskInfo, setTaskInfo] = useState<ITask>({
        id: uuidv4(),
        title: '',
        text: '',
        studyProgram: '',
        subject: '',
        year: 1,
        published: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>): void => {
        const {name, value} = e.target;

        setTaskInfo((prev) => {
            if (name === 'published') return {...prev, [name]: !prev.published};
            if (name === 'studyProgram' || name === 'year' || name === 'subject') {
                const selected = value;
                return {...prev, [name]: selected};
            }
            return {...prev, [name]: value};
        });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(addNewTaskAction(taskInfo));
        setTaskInfo({id: '', title: '', text: '', studyProgram: '', subject: '', year: 1, published: false});
        navigate('/tasks');
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
                            placeholder="Enter Task Title..."
                            value={taskInfo.title}
                            onChange={handleChange}
                        />
                        <TextInput
                            type="textArea"
                            name="text"
                            placeholder="Enter Task Text..."
                            value={taskInfo.text}
                            onChange={handleChange}
                        />

                        <div className="p-actions__form_pair">
                            <select name="studyProgram" value={taskInfo.studyProgram} onChange={handleChange}>
                                {studyProgramOptions.map((option) => (
                                    <option key={option.id} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                            <select name="year" value={taskInfo.year} onChange={handleChange}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <select name="subject" value={taskInfo.subject} onChange={handleChange}>
                                <option value={'abc'}>abc</option>
                                <option value={'def'}>def</option>
                            </select>

                            <ToggleSwitch id="published" name="published" isOn={taskInfo.published} onChange={handleChange} />
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

export default NewTaskPage;