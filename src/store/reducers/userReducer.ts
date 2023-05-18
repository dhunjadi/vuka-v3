import {AnyAction} from 'redux';
import userList, {Class, StudentRole, User, UserRole} from '../../data/userList';
import {EDIT_CLASS, SELECT_CLASS, SELECT_USER, USER_LOGIN, USER_LOGOUT} from '../actions/userActions';

export interface userReducerState {
    loggedInUser: User<UserRole>;
    userList: User<UserRole>[];
    selectedUser: User<UserRole>;
    selectedClass: Class;
}

const initialState: userReducerState = {
    loggedInUser: {
        id: '',
        fName: '',
        lName: '',
        email: '',
        password: '',
        imgSrc: '',
        role: {
            type: 'Admin',
        },
    },
    userList: userList,
    selectedUser: {
        id: '',
        fName: '',
        lName: '',
        email: '',
        password: '',
        imgSrc: '',
        role: {
            type: 'Admin',
        },
    },
    selectedClass: {
        studentId: '',
        id: '',
        title: '',
        semester: '1',
        exam1: undefined,
        exam2: undefined,
        essay: undefined,
        presentation: undefined,
        ects: '0',
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

        case SELECT_CLASS:
            return {
                ...state,
                selectedClass: action.clas,
            };

        case EDIT_CLASS: {
            const index = state.userList.findIndex((user) => user.id === action.clas.studentId);
            const users = [...state.userList];

            if (users[index].role.type === 'Student') {
                const editedUser = {
                    ...users[index],
                    role: {
                        ...users[index].role,
                        student: {
                            ...(users[index].role as StudentRole).student,
                            classes: (users[index].role as StudentRole).student.classes.map((clas) =>
                                clas.id === action.clas.id ? action.clas : clas
                            ),
                        },
                    },
                };

                return {
                    ...state,
                    userList: state.userList.map((user) => (user.id === action.clas.studentId ? editedUser : user)),
                };
            }

            return state;
        }

        default:
            return state;
    }
};
