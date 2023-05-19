import {Task} from '../../types/taskTypes';
import {AddNewTaskAction, ClearSelectedTaskAction, DeleteTaskAction, EditTaskAction, SelectTaskAction} from './types/tasksActionTypes';

export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SELECT_TASK = 'SELECT_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const CLEAR_SELECTED_TASK = 'CLEAR_SELECTED_TASK';

export const addNewTaskAction = (task: Task): AddNewTaskAction => ({
    type: ADD_NEW_TASK,
    task,
});

export const deleteTaskAction = (id: string): DeleteTaskAction => ({
    type: DELETE_TASK,
    id,
});

export const selectTaskAction = (task: Task): SelectTaskAction => ({
    type: SELECT_TASK,
    task,
});

export const editTaskAction = (task: Task): EditTaskAction => ({
    type: EDIT_TASK,
    task,
});

export const clearSelectedTaskAction = (): ClearSelectedTaskAction => ({
    type: CLEAR_SELECTED_TASK,
});
