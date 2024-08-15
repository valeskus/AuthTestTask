import * as React from 'react';
import * as Redux from 'react-redux';


import { loginUser } from '../userActions';

export const useLoginUser = () => {
    const dispatch = Redux.useDispatch();

    return React.useCallback(
        async (phoneNumber: string) => {
            await loginUser(phoneNumber, dispatch);
        },
        [],
    );
};
