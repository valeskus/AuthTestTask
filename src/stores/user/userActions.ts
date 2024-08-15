import { Dispatch } from 'redux';
import { RegisterFormModel } from '../../models';
import * as User_Api from '../../api/user';

export enum UserActions {
    SET_USER = '@user/set_user',
}

const setUserAction = (userInfo: Omit<RegisterFormModel, 'code'>) => ({
    type: UserActions.SET_USER,
    payload: userInfo,
});

export const setUser = async (userInfo: Omit<RegisterFormModel, 'code'>, dispatch: Dispatch) => {
    try {
        dispatch(setUserAction(userInfo));
    } catch (error) {
        console.log(error)
    }
};

export const loginUser = async (phoneNumber: string, dispatch: Dispatch) => {
    return User_Api.login(phoneNumber)
};

export const register = (userInfo: RegisterFormModel) => {
    return User_Api.register(userInfo)
};

export const sentCode = async (phoneNumber: string) => {
    return User_Api.sentCode(phoneNumber)
};