import {AnyAction} from 'redux';
import userList from '../../data/userList';
import {SELECT_USER, USER_LOGIN, USER_LOGOUT} from '../actions/userActions';
import {User, UserRole} from '../../types/userTypes';

export interface userReducerState {
    loggedInUser: User;
    userList: User[];
    selectedUser: User;
}

const initialState: userReducerState = {
    loggedInUser: {
        userId: '',
        fName: '',
        lName: '',
        email: '',
        password: '',
        imgSrc: '',
        role: UserRole.student,
    },
    userList: userList,
    selectedUser: {
        userId: '',
        fName: '',
        lName: '',
        email: '',
        password: '',
        imgSrc: '',
        role: UserRole.student,
    },
};

export const userReducer = (state: userReducerState = initialState, action: AnyAction): userReducerState => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                loggedInUser: action.user,
            };
        case USER_LOGOUT:
            return initialState;
        case SELECT_USER:
            return {
                ...state,
                selectedUser: action.student,
            };

        default:
            return state;
    }
};
