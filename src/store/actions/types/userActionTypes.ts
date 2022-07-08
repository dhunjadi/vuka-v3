import {IUser} from '../../../data/userList';
import {USER_LOGIN, USER_LOGOUT} from '../userActions';

export interface IUserLoginAction {
    type: typeof USER_LOGIN;
    user: IUser;
}

export interface IUserLogoutAction {
    type: typeof USER_LOGOUT;
}
