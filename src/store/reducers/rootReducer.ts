import {combineReducers} from 'redux';
import {newsReducer, newsReducerState} from './newsReducer';
import {userReducer, userReducerState} from './userReducer';

export interface StoreState {
    userReducer: userReducerState;
    newsReducer: newsReducerState;
}

export const rootReducer = combineReducers({
    userReducer,
    newsReducer,
});
