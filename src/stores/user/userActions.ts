import { Dispatch } from 'redux';
import { RegisterFormModel } from '../../models';
import * as User_Api from '../../api/user';

export enum UserActions {
    SET_USER = '@user/set_user',
    REGISTER_USER = '@user/register',
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

export const register = async (userInfo: RegisterFormModel) => {
    try {
        await User_Api.register(userInfo)
    } catch (error) {
        console.log(error)
    }
};

export const sentCode = async (phoneNumber: string) => {
    try {
        await User_Api.sentCode(phoneNumber)
    } catch (error) {
        console.log(error)
    }
};