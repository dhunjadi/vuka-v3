import {IClass, IUser} from '../../data/userList';
import {IEditClassAction, ISelectClassAction, ISelectStudentAction, IUserLoginAction, IUserLogoutAction} from './types/userActionTypes';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const SELECT_STUDENT = 'SELECT_STUDENT';
export const SELECT_CLASS = 'SELECT_CLASS';
export const EDIT_CLASS = 'EDIT_CLASS';

export const userLoginAction = (user: IUser): IUserLoginAction => ({
    type: USER_LOGIN,
    user,
});

export const userLogoutAction = (): IUserLogoutAction => ({
    type: USER_LOGOUT,
});

export const selectStudentAction = (student: IUser): ISelectStudentAction => ({
    type: SELECT_STUDENT,
    student,
});

export const selectClassAction = (clas: IClass): ISelectClassAction => ({
    type: SELECT_CLASS,
    clas,
});

export const editClassAction = (clas: IClass): IEditClassAction => ({
    type: EDIT_CLASS,
    clas,
});
