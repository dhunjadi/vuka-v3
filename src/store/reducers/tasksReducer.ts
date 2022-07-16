import {AnyAction} from 'redux';
import {taskList, ITask} from '../../data/taskList';

export interface tasksReducerState {
    taskList: ITask[];
}

const initialState = {
    taskList: taskList,
};

export const tasksReducer = (state: tasksReducerState = initialState, action: AnyAction): tasksReducerState => {
    switch (action.type) {
        default:
            return state;
    }
};
