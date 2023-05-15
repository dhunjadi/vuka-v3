import {AnyAction} from 'redux';
import userList, {IClass, IUser} from '../../data/userList';
import {EDIT_CLASS, SELECT_CLASS, SELECT_STUDENT, USER_LOGIN, USER_LOGOUT} from '../actions/userActions';

export interface userReducerState {
    loggedInUser: IUser;
    userList: IUser[];
    selectedStudent: IUser;
    selectedClass: IClass;
}

const initialState: userReducerState = {
    loggedInUser: {
        id: '',
        fName: '',
        lName: '',
        email: '',
        password: '',
        role: 'Student',
        studyProgram: 'General',
        studyType: '',
        imgSrc: '',
        year: 0,
        books: [],
        classes: [],
    },
    userList: userList,
    selectedStudent: {
        id: '',
        fName: '',
        lName: '',
        email: '',
        password: '',
        role: 'Student',
        studyProgram: 'General',
        studyType: '',
        imgSrc: '',
        year: 0,
        books: [],
        classes: [],
    },
    selectedClass: {
        studentId: '',
        id: '',
        title: '',
        semester: 1,
        exam1: undefined,
        exam2: undefined,
        essay: undefined,
        presentation: undefined,
        ects: 0,
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
        case SELECT_STUDENT:
            return {
                ...state,
                selectedStudent: action.student,
            };
            return initialState;
        case SELECT_CLASS:
            return {
                ...state,
                selectedClass: action.clas,
            };
        case EDIT_CLASS: {
            const index = state.userList.findIndex((user) => user.id === action.clas.studentId);
            const users = [...state.userList];
            const editedUser = {
                ...users[index],
                classes: users[index].classes.map((clas) => (clas.id === action.clas.id ? action.clas : clas)),
            };

            return {
                ...state,
                userList: [...state.userList.map((user) => (user.id === action.clas.studentId ? editedUser : user))],
            };
        }
        default:
            return state;
    }
};
