import axiosClient from '../../../services/axiosConfig';
export const getInfoUser = () => {
  const url = `/users/info`;
  return axiosClient.get(url);
};
export const LogOut = () => {
  const url = `/auth/logout`;
  return axiosClient.post(url);
};
