import {IUser} from '../../data/userList';
import {IUserLoginAction, IUserLogoutAction} from './types/userActionTypes';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLoginAction = (user: IUser): IUserLoginAction => ({
    type: USER_LOGIN,
    user,
});

export const userLogoutAction = (): IUserLogoutAction => ({
    type: USER_LOGOUT,
});
