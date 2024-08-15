import * as Redux from 'redux';
import { UserActions } from './userActions';
import { RegisterFormModel } from '../../models'

export interface UserStore {
    phoneNumber: string;
    name: string;
    lastName: string;
}

const initialState: UserStore = {
    phoneNumber: '',
    name: '',
    lastName: ''
};

export function userReducer(
    state = initialState,
    action: Redux.AnyAction,
): UserStore {
    switch (action.type) {
        case UserActions.SET_USER: {
            const { phoneNumber, name, lastName } = action.payload as RegisterFormModel;

            return {
                ...state,
                phoneNumber,
                name,
                lastName
            };
        }
        default:
            return state;
    }
}