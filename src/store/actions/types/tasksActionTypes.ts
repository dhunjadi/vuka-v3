import {Task} from '../../../types/taskTypes';
import {ADD_NEW_TASK, CLEAR_SELECTED_TASK, DELETE_TASK, EDIT_TASK, SELECT_TASK} from '../tasksActions';

export interface IAddNewTaskAction {
    type: typeof ADD_NEW_TASK;
    task: Task;
}

export interface IDeleteTaskAction {
    type: typeof DELETE_TASK;
    id: string;
}

export interface ISelectTaskAction {
    type: typeof SELECT_TASK;
    task: Task;
}

export interface IEditTaskAction {
    type: typeof EDIT_TASK;
    task: Task;
}

export interface IClearSelectedTaskAction {
    type: typeof CLEAR_SELECTED_TASK;
}
