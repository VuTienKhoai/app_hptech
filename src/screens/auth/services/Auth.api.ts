import axiosClient from '../../../services/axiosConfig';
import {stringifyQuery} from '../../../utils/StringHelper';
import {Ilogin} from './AuthType';

export type loginResult = Awaited<ReturnType<typeof login>>;
export const login = (body: Ilogin) => {
  const url = `/auth/login`;
  return axiosClient.post(url, body);
};
