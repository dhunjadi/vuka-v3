import {combineReducers} from 'redux';
import {newsReducer, newsReducerState} from './newsReducer';
import {tasksReducer, tasksReducerState} from './tasksReducer';
import {userReducer, userReducerState} from './userReducer';
import {bookReducer, bookReducerState} from './bookReducer';

export interface StoreState {
    userReducer: userReducerState;
    newsReducer: newsReducerState;
    tasksReducer: tasksReducerState;
    bookReducer: bookReducerState;
}

export const rootReducer = combineReducers({
    userReducer,
    newsReducer,
    tasksReducer,
    bookReducer,
});
