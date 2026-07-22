'use server';

import { ILoginPayload } from './auth.validation';

export const loginAction = async (payload: ILoginPayload) => {
  console.log(payload);
};
