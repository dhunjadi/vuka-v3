import {User, UserRole} from '../../types/userTypes';
import {Class} from '../../types/classTypes';
import {EditClassAction, SelectClassAction, SelectStudentAction, UserLoginAction, UserLogoutAction} from './types/userActionTypes';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const SELECT_USER = 'SELECT_USER';
export const SELECT_CLASS = 'SELECT_CLASS';
export const EDIT_CLASS = 'EDIT_CLASS';

export const userLoginAction = (user: User<UserRole>): UserLoginAction => ({
    type: USER_LOGIN,
    user,
});

export const userLogoutAction = (): UserLogoutAction => ({
    type: USER_LOGOUT,
});

export const selectStudentAction = (student: User<UserRole>): SelectStudentAction => ({
    type: SELECT_USER,
    student,
});

export const selectClassAction = (clas: Class): SelectClassAction => ({
    type: SELECT_CLASS,
    clas,
});

export const editClassAction = (clas: Class): EditClassAction => ({
    type: EDIT_CLASS,
    clas,
});
