import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Article from '../../components/Article';
import {deleteTaskAction, selectTaskAction} from '../../store/actions/tasksActions';
import {StoreState} from '../../store/reducers/rootReducer';

const TasksPage = (): JSX.Element => {
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);
    const {taskList} = useSelector((state: StoreState) => state.tasksReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tasksStudentsSee = taskList
        .filter((task) => {
            return task.studyProgram === loggedInUser.studyProgram && task.year <= loggedInUser.year && task.published === true;
        })
        .sort((a, b) => {
            return b.year - a.year;
        })
        .map((task) => {
            return <Article key={task.id} {...task} />;
        });

    const tasksProfAndAdminSee = taskList
        .sort((a, b) => {
            return b.year - a.year;
        })
        .map((task) => {
            return (
                <Article
                    key={task.id}
                    handleSelectToEdit={() => {
                        dispatch(selectTaskAction(task));
                        navigate(`/tasks/edit/${task.id}`);
                    }}
                    handleSelectToDelete={() => dispatch(deleteTaskAction(task.id))}
                    {...task}
                />
            );
        });

    return (
        <>
            <Navbar />
            <div className="p-tasks">
                {loggedInUser.role !== 'student' && (
                    <div className="p-tasks__header">
                        <div className="p-tasks__header_buttons">
                            <button className="btn btn--primary" onClick={() => navigate(`/tasks/new`)}>
                                Create new task
                            </button>
                        </div>
                    </div>
                )}
                {loggedInUser.role === 'student' ? tasksStudentsSee : tasksProfAndAdminSee}
            </div>
        </>
    );
};

export default TasksPage;
