import React from 'react';
import {useSelector} from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import {StoreState} from '../store/reducers/rootReducer';

const TasksPage = (): JSX.Element => {
    const loggedInUser = useSelector((state: StoreState) => state.userReducer.loggedInUser);
    const taskList = useSelector((state: StoreState) => state.tasksReducer.taskList);

    return (
        <>
            <Navbar />
            <div id="p-tasks">Tasks page</div>
        </>
    );
};

export default TasksPage;
