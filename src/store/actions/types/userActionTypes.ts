import {IClass, IUser} from '../../../data/userList';
import {EDIT_CLASS, SELECT_CLASS, SELECT_STUDENT, USER_LOGIN, USER_LOGOUT} from '../userActions';

export interface IUserLoginAction {
    type: typeof USER_LOGIN;
    user: IUser;
}

export interface IUserLogoutAction {
    type: typeof USER_LOGOUT;
}

export interface ISelectStudentAction {
    type: typeof SELECT_STUDENT;
    student: IUser;
}

export interface ISelectClassAction {
    type: typeof SELECT_CLASS;
    clas: IClass;
}

export interface IEditClassAction {
    type: typeof EDIT_CLASS;
    clas: IClass;
}
