import { RegisterFormModel } from '../models';
import { client } from './client.api';

export const sentCode = async (phoneNumber: string): Promise<string> => {
  const result = await client.post('/code', {
    phoneNumber
  });

  return result.statusText;
};

export const register = async (userInfo: RegisterFormModel): Promise<string> => {
  const result = await client.post('/register', {
    userInfo
  });

  return result.statusText;
};