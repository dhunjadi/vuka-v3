import {Class, User, UserRole} from '../../data/userList';
import {IEditClassAction, ISelectClassAction, ISelectStudentAction, IUserLoginAction, IUserLogoutAction} from './types/userActionTypes';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const SELECT_USER = 'SELECT_USER';
export const SELECT_CLASS = 'SELECT_CLASS';
export const EDIT_CLASS = 'EDIT_CLASS';

export const userLoginAction = (user: User<UserRole>): IUserLoginAction => ({
    type: USER_LOGIN,
    user,
});

export const userLogoutAction = (): IUserLogoutAction => ({
    type: USER_LOGOUT,
});

export const selectStudentAction = (student: User<UserRole>): ISelectStudentAction => ({
    type: SELECT_USER,
    student,
});

export const selectClassAction = (clas: Class): ISelectClassAction => ({
    type: SELECT_CLASS,
    clas,
});

export const editClassAction = (clas: Class): IEditClassAction => ({
    type: EDIT_CLASS,
    clas,
});
