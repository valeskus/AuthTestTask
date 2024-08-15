import { client } from './client.api';

export const codeVerify = async (code:string): Promise<string> => {
  const result = await client.post('/code',{
    code
  });

  return result.statusText;
};