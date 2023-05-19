import {Task} from '../../../types/taskTypes';
import {ADD_NEW_TASK, CLEAR_SELECTED_TASK, DELETE_TASK, EDIT_TASK, SELECT_TASK} from '../tasksActions';

export interface AddNewTaskAction {
    type: typeof ADD_NEW_TASK;
    task: Task;
}

export interface DeleteTaskAction {
    type: typeof DELETE_TASK;
    id: string;
}

export interface SelectTaskAction {
    type: typeof SELECT_TASK;
    task: Task;
}

export interface EditTaskAction {
    type: typeof EDIT_TASK;
    task: Task;
}

export interface ClearSelectedTaskAction {
    type: typeof CLEAR_SELECTED_TASK;
}
