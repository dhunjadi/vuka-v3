import {User, UserRole} from '../../../types/userTypes';
import {EDIT_CLASS, SELECT_CLASS, SELECT_USER, USER_LOGIN, USER_LOGOUT} from '../userActions';
import {Class} from '../../../types/classTypes';

export interface IUserLoginAction {
    type: typeof USER_LOGIN;
    user: User<UserRole>;
}

export interface IUserLogoutAction {
    type: typeof USER_LOGOUT;
}

export interface ISelectStudentAction {
    type: typeof SELECT_USER;
    student: User<UserRole>;
}

export interface ISelectClassAction {
    type: typeof SELECT_CLASS;
    clas: Class;
}

export interface IEditClassAction {
    type: typeof EDIT_CLASS;
    clas: Class;
}
