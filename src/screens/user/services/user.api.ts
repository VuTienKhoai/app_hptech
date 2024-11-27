import axiosClient from '../../../services/axiosConfig';

export const LogOut = () => {
  const url = `/auth/logout`;
  return axiosClient.post(url);
};
