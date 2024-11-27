import axiosClient from '../../../services/axiosConfig';
import {IActiveAccount, Ilogin} from './AuthType';

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
  const url = `/auth/resend-otp`;
  return axiosClient.post(url, body);
};
export const forgotPassword = (body: any) => {
  const url = `/auth/forgot-password`;
  return axiosClient.post(url, body);
};
