import axiosClient from '../../../services/axiosConfig';
import {stringifyQuery} from '../../../utils/StringHelper';
import {IActiveAccount, Ilogin, IResendOTP} from './AuthType';

export type loginResult = Awaited<ReturnType<typeof login>>;
export const login = (body: Ilogin) => {
  const url = `/auth/login`;
  return axiosClient.post(url, body);
};
export const resgiter = (body: any) => {
  const url = `/auth/register`;
  return axiosClient.post(url, body);
};
export const activeResgiter = (body: IActiveAccount) => {
  const url = `/auth/verify-otp`;
  return axiosClient.post(url, body);
};
export const resendOTP = (body: any) => {
  console.log('🚀 ~ resendOTP ~ body:', body);
  const url = `/auth/resend-otp`;
  return axiosClient.post(url, body);
};
