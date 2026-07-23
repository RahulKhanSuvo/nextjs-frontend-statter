'use server';

import { isAxiosError } from 'axios';
import { ILoginPayload } from './auth.validation';
import { httpClient } from '@/lib/axios';

export const loginAction = async (payload: ILoginPayload) => {
  console.log(payload);
  try {
    const res = await httpClient.post('/auth/login', payload);
    return {
      success: true,
      data: res.data,
    };
  } catch (error: unknown) {
    console.error('Error:', error);
    let message = 'Invalid email or password';
    if (
      isAxiosError(error) &&
      error.response?.data &&
      typeof error.response.data === 'object' &&
      'message' in error.response.data
    ) {
      message = (error.response.data as { message: string }).message;
    }
    return {
      success: false,
      message,
    };
  }
};
