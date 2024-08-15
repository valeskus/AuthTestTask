import { RegisterFormModel } from '../models';
import { client } from './client.api';

export const sentCode = async (phoneNumber: string): Promise<number> => {
  const result = await client.post('/code', {
    phoneNumber
  });

  return result.status;
};

export const register = async (userInfo: RegisterFormModel): Promise<number> => {
  const result = await client.post('/register', {
    userInfo
  });

  return result.status;
};