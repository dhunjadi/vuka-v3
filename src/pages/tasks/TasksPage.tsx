import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Article from '../../components/Article';
import {deleteTaskAction, selectTaskAction} from '../../store/actions/tasksActions';
import {StoreState} from '../../store/reducers/rootReducer';
import Modal from '../../components/Modal';
import {findStudentProps} from '../../utils/userUtils';

const TasksPage = (): JSX.Element => {
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);
    const {taskList, selectedTask} = useSelector((state: StoreState) => state.tasksReducer);
    const studentProps = findStudentProps(loggedInUser.userId);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState<boolean>(false);

    const handleDelete = (): void => {
        dispatch(deleteTaskAction(selectedTask.id));
        setIsDeleteTaskModalOpen(false);
    };

    const tasksStudentsSee = taskList
        .filter((task) => {
            if (studentProps)
                return (
                    studentProps.studyProgram === task.studyProgram &&
                    studentProps.year >= task.year.toString() &&
                    task.isPublished === true
                );

            return false;
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
                    handleSelectToDelete={() => {
                        dispatch(selectTaskAction(task));
                        setIsDeleteTaskModalOpen(true);
                    }}
                    {...task}
                />
            );
        });

    return (
        <>
            <Navbar />
            <div className="p-tasks">
                {!studentProps && (
                    <div className="p-tasks__header">
                        <div className="p-tasks__header_buttons">
                            <button className="btn btn--primary" onClick={() => navigate(`/tasks/new`)}>
                                Create new task
                            </button>
                        </div>
                    </div>
                )}
                {studentProps ? tasksStudentsSee : tasksProfAndAdminSee}
            </div>

            <Modal
                isOpen={isDeleteTaskModalOpen}
                onCancel={() => setIsDeleteTaskModalOpen(false)}
                onConfirm={handleDelete}
                showCancel
                showConfirm
            >
                Are you sure you want to delete &quot;{selectedTask.title}&quot;?
            </Modal>
        </>
    );
};

export default TasksPage;
