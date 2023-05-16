import {AnyAction} from 'redux';
import {taskList, ITask} from '../../data/taskList';
import {ADD_NEW_TASK, CLEAR_SELECTED_TASK, DELETE_TASK, EDIT_TASK, SELECT_TASK} from '../actions/tasksActions';

export interface tasksReducerState {
    taskList: ITask[];
    selectedTask: ITask;
}

const initialState = {
    taskList: taskList,
    selectedTask: {id: '', title: '', text: '', studyProgram: 'General' as const, subject: '', year: 1, published: false},
};

export const tasksReducer = (state: tasksReducerState = initialState, action: AnyAction): tasksReducerState => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                taskList: [...state.taskList, action.task],
            };
        case SELECT_TASK:
            return {
                ...state,
                selectedTask: action.task,
            };
        case DELETE_TASK:
            return {
                ...state,
                taskList: [...state.taskList.filter((task) => task.id !== action.id)],
            };
        case EDIT_TASK:
            return {
                ...state,
                taskList: [...state.taskList.map((task) => (task.id === action.task.id ? action.task : task))],
            };
        case CLEAR_SELECTED_TASK:
            return {
                ...state,
                selectedTask: initialState.selectedTask,
            };
        default:
            return state;
    }
};
