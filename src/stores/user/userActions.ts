import { Dispatch } from 'redux';
import { RegisterFormModel } from '../../models';

export enum UserActions {
    REGISTER = '@user/register',
}

const actionRegister = (userInfo: RegisterFormModel) => ({
    type: UserActions.REGISTER,
    payload: userInfo,
});

export const register = async (userInfo: RegisterFormModel, dispatch: Dispatch) => {
    try {
        //logic
        dispatch(actionRegister(userInfo));
    } catch (error) {
        console.log(error)
    }
};