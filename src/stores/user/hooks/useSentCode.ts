import * as React from 'react';

import { sentCode } from '../userActions';

export const useSentCode = () => {

  return React.useCallback(
    async (phoneNumber: string) => {
      await sentCode(phoneNumber);
    },
    [],
  );
};
