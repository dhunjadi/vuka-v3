import {combineReducers} from 'redux';
import {newsReducer, newsReducerState} from './newsReducer';
import {tasksReducer, tasksReducerState} from './tasksReducer';
import {userReducer, userReducerState} from './userReducer';
import {bookReducer, bookReducerState} from './bookReducer';
import {classReducer, classReducerState} from './classReducer';

export interface StoreState {
    userReducer: userReducerState;
    newsReducer: newsReducerState;
    tasksReducer: tasksReducerState;
    bookReducer: bookReducerState;
    classReducer: classReducerState;
}

export const rootReducer = combineReducers({
    userReducer,
    newsReducer,
    tasksReducer,
    bookReducer,
    classReducer,
});
