/* eslint-disable import/extensions */
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
//redux

//constants

import {store} from '../redux/store';
import {resetLogin, setToken} from '../redux/slide/app.slice';
import {APP_URL} from '../constants/Url';

// export interface IOriginRequest extends AxiosRequestConfig {
//   _retry: boolean;
// }

export interface IResponse<T> {
  code: string;
  data: T;
  message: string;
}

const handleRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  //check token
  const storeState = store.getState();
  const access_token = storeState?.persistedReducer.app.token;
  if (access_token && config.headers) {
    config.headers['Authorization'] = 'Bearer ' + access_token;
  }
  config.validateStatus = function (status: any) {
    // return (status >= 200 && status < 300) || status === 404; // default
    return status >= 200 && status < 300; // default
  };
  return config;
};

const handleRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const handleResponse = (response: AxiosResponse) => {
  return response.data;
};

const handleResponseError = async (error: AxiosError<IResponse<any>>) => {
  //xử lý khi token hết hạn

  if (error.response?.status === 401) {
    console.log('Lỗi xác thực');
    return Promise.reject(error);
  }

  //show message error
  if (error.response?.status !== 404) {
    // xử lý hoặc thống báo khi có lỗi
  }

  return Promise.reject(error.response?.data);
};

const axiosClient = axios.create({
  baseURL: APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Chấp nhận cookie
});
const axiosClientFile = axios.create({
  baseURL: APP_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// Hàm xử lý refresh token
const refreshAuthLogic = async (failedRequest: any) => {
  const storeState = store.getState();
  const cookie = storeState?.persistedReducer.app.cookies; // Lấy refresh token từ Redux
  if (cookie) {
    try {
      // Gọi API refresh token
      const response = await axios.post(
        `${APP_URL}/auth/refresh-token`,
        {},
        {
          headers: {
            Cookie: `refresh_token=${cookie}`, // Gửi refresh token
          },
          withCredentials: true,
        },
      );
      const newAccessToken = response.data.newAccessToken; // Token mới từ server
      if (newAccessToken) {
        // Lưu token mới vào Redux
        store.dispatch(setToken(newAccessToken));
        // Gắn token mới vào header của request thất bại
        failedRequest.response.config.headers[
          'Authorization'
        ] = `Bearer ${newAccessToken}`;
        return Promise.resolve();
      }
    } catch (error) {
      console.error('Lỗi khi refresh token:', error);
      store.dispatch(resetLogin()); // Đăng xuất nếu refresh token thất bại
      return Promise.reject(error);
    }
  } else {
    store.dispatch(resetLogin()); // Đăng xuất nếu không có refresh token
    return Promise.reject(new Error('No refresh token available.'));
  }
};
// Kích hoạt refresh token interceptor

axiosClient.interceptors.request.use(handleRequest as any, handleRequestError);
axiosClient.interceptors.response.use(handleResponse, handleResponseError);
axiosClientFile.interceptors.request.use(
  handleRequest as any,
  handleRequestError,
);
axiosClientFile.interceptors.response.use(handleResponse, handleResponseError);
createAuthRefreshInterceptor(axiosClient, refreshAuthLogic);
export {axiosClient, axiosClientFile};
export default axiosClient;
