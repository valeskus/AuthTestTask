import * as Redux from 'react-redux';

import { RegisterFormModel } from '../../../models';
import { RootStore } from '../../rootStore';

export const useUserStore = () => {
  return Redux.useSelector<RootStore, Omit<RegisterFormModel, 'code'>>(
    store => store.user,
  );
};
