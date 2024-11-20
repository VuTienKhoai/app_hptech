import axiosClient from '../../../services/axiosConfig';
export const getInfoUser = () => {
  const url = `/users/info`;
  return axiosClient.get(url);
};
