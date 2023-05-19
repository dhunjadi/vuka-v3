import {User, UserRole} from '../../../types/userTypes';
import {EDIT_CLASS, SELECT_CLASS, SELECT_USER, USER_LOGIN, USER_LOGOUT} from '../userActions';
import {Class} from '../../../types/classTypes';

export interface UserLoginAction {
    type: typeof USER_LOGIN;
    user: User<UserRole>;
}

export interface UserLogoutAction {
    type: typeof USER_LOGOUT;
}

export interface SelectStudentAction {
    type: typeof SELECT_USER;
    student: User<UserRole>;
}

export interface SelectClassAction {
    type: typeof SELECT_CLASS;
    clas: Class;
}

export interface EditClassAction {
    type: typeof EDIT_CLASS;
    clas: Class;
}
