import {combineReducers} from 'redux';
import {userReducer, userReducerState} from './userReducer';

export interface StoreState {
    userReducer: userReducerState;
}

export const rootReducer = combineReducers({
    userReducer,
});
