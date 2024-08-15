import * as React from 'react';

import { sentCode } from '../userActions';

export const useSentCode = () => {

  return React.useCallback(
    (phoneNumber: string) => {
      sentCode(phoneNumber);
    },
    [],
  );
};
