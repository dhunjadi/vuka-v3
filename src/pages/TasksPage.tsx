import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../components/Card';
import Navbar from '../components/navbar/Navbar';
import {StoreState} from '../store/reducers/rootReducer';

const TasksPage = (): JSX.Element => {
    const loggedInUser = useSelector((state: StoreState) => state.userReducer.loggedInUser);
    const taskList = useSelector((state: StoreState) => state.tasksReducer.taskList);

    const tasksStudentsSee = taskList
        .filter((task) => {
            return task.studyProgram === loggedInUser.studyProgram && task.year <= loggedInUser.year && task.published === true;
        })
        .sort((a, b) => {
            return b.year - a.year;
        })
        .map((task) => {
            return (
                <Card
                    header={task.title}
                    info={[`Subject: ${task.subject}`, `Year: ${task.year.toString()}`]}
                    showButtons
                    buttons={
                        <>
                            <button className="btn btn--primary">Mark as completed</button>
                        </>
                    }
                    key={task.id}
                >
                    {task.text}
                </Card>
            );
        });

    const tasksProfAndAdminSee = taskList
        .sort((a, b) => {
            return b.year - a.year;
        })
        .map((task) => {
            return (
                <Card
                    key={task.id}
                    header={task.title}
                    info={[
                        `Study Program: ${task.studyProgram}`,
                        `${task.published ? 'Published' : 'Not published'}`,
                        `Subject: ${task.subject}`,
                        `Year: ${task.year.toString()}`,
                    ]}
                    showButtons
                    buttons={
                        <>
                            <button className="btn btn--primary">Edit task</button>
                            <button className="btn btn--primary">Delete task</button>
                        </>
                    }
                >
                    {task.text}
                </Card>
            );
        });

    return (
        <>
            <Navbar />
            <div className="p-tasks">
                {loggedInUser.role !== 'student' && (
                    <div className="p-tasks__header">
                        <div className="p-tasks__header_buttons">
                            <button className="btn btn--primary">Create new task</button>
                        </div>
                    </div>
                )}
                {loggedInUser.role === 'student' ? tasksStudentsSee : tasksProfAndAdminSee}
            </div>
        </>
    );
};

export default TasksPage;
