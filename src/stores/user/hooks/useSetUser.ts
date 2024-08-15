import * as React from 'react';
import * as Redux from 'react-redux';

import { setUser } from '../userActions';
import { RegisterFormModel } from '../../../models';

export const useSetUser = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (userInfo: Omit<RegisterFormModel, 'code'>) => {
      setUser(userInfo, dispatch);
    },
    [dispatch],
  );
};
