import {AnyAction} from 'redux';
import {IUser} from '../../data/userList';
import {USER_LOGIN, USER_LOGOUT} from '../actions/userActions';

export interface userReducerState {
    loggedInUser: IUser;
}

const initialState = {
    loggedInUser: {
        id: '',
        fName: '',
        lName: '',
        email: '',
        password: '',
        status: '',
        studyProgram: '',
        year: 0,
        books: [],
        classes: [],
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
        default:
            return state;
    }
};
