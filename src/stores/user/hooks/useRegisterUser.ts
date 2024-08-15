import * as React from 'react';

import { register } from '../userActions';
import { RegisterFormModel } from '../../../models';

export const useRegisterUser = () => {

  return React.useCallback(
    (userInfo: RegisterFormModel) => {
        register(userInfo);
    },
    [],
  );
};
