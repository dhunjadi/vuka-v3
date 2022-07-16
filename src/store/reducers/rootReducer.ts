import {combineReducers} from 'redux';
import {newsReducer, newsReducerState} from './newsReducer';
import {tasksReducer, tasksReducerState} from './tasksReducer';
import {userReducer, userReducerState} from './userReducer';

export interface StoreState {
    userReducer: userReducerState;
    newsReducer: newsReducerState;
    tasksReducer: tasksReducerState;
}

export const rootReducer = combineReducers({
    userReducer,
    newsReducer,
    tasksReducer,
});
