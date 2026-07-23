'use server';

import { isAxiosError } from 'axios';
import { ILoginPayload, loginZodSchema } from './auth.validation';
import { httpClient } from '@/lib/axios';
import { ILoginResponse, IRefreshTokenResponse, UserInfo } from '@/types/auth.type';
import { setTokenInCookies } from '@/lib/tokenUtil';
import { ApiErrorResponse } from '@/types/api.type';

export const loginAction = async (
  payload: ILoginPayload,
): Promise<ILoginResponse | ApiErrorResponse> => {
  console.log(payload);
  const parsedPayload = loginZodSchema.safeParse(payload);
  if (!parsedPayload.success) {
    const errorMessage = parsedPayload.error.issues[0].message || 'Invalid payload';
    return {
      success: false,
      message: errorMessage,
    };
  }
  try {
    const res = await httpClient.post<ILoginResponse>('/auth/login', parsedPayload.data);
    const { token, accessToken, refreshToken } = res.data;
    await setTokenInCookies('better-auth.session_token', token);
    await setTokenInCookies('accessToken', accessToken);
    await setTokenInCookies('refreshToken', refreshToken);
    return {
      success: true,
      message: 'Login successful',
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

export const getCurrentUser = async (): Promise<UserInfo | null> => {
  try {
    const res = await httpClient.get<UserInfo>('/auth/me');
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
// get new token
export const getNewToken = async () => {
  try {
    const res = await httpClient.post<IRefreshTokenResponse>('/auth/refresh-token');
    const { sessionToken, accessToken, refreshToken } = res.data;
    await setTokenInCookies('better-auth.session_token', sessionToken);
    await setTokenInCookies('accessToken', accessToken);
    await setTokenInCookies('refreshToken', refreshToken);
    return {
      success: true,
      message: 'Token refreshed',
    };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
