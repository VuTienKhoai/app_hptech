import {useState} from 'react';
import {IQueryParamsBody} from '../../../utils/type';
import {useQuery, UseQueryOptions, UseQueryResult} from '@tanstack/react-query';
import {login, resgiter} from './Auth.api';
import CookieManager from '@react-native-cookies/cookies';
import {APP_URL} from '../../../constants/Url';
import {store} from '../../../redux/store';
import {setCookies} from '../../../redux/slide/app.slice';
// Định nghĩa kiểu cho dữ liệu trả về khi login thành công
interface IResponseLogin {
  err: number;
  mess: string;
  access_token: string | undefined | null;
}

export const useSigning = ({body, options}: IQueryParamsBody<any> = {}): {
  data: IResponseLogin | undefined; // Gán kiểu cho data trả về từ query
  isFetching: boolean;
  refetch: () => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
} => {
  const [count, setCount] = useState(0);

  // Kiểu cho queryKey có thể là một chuỗi hoặc một mảng
  const queryKey: any = body ? ['login', body] : '';

  // Tạo options cho useQuery, thêm kiểu cho queryFn là IResponseLogin
  const _options: UseQueryOptions<IResponseLogin, any, IResponseLogin> = {
    queryKey: queryKey,
    queryFn: () => login(body),
    enabled: !!queryKey,
    ...options,
  };

  const {data, isFetching, refetch} = useQuery<IResponseLogin>(_options); // Đảm bảo data có kiểu IResponseLogin

  const getCookies = async () => {
    CookieManager.get(`${APP_URL}/auth/login`).then(cookies => {
      if (cookies) {
        store.dispatch(setCookies(cookies?.refreshToken?.value));
      } else {
        console.log('Không lưu được cookiess');
      }
    });
  };
  if (data?.access_token) {
    getCookies(); // Lấy cookie sau khi đăng nhập thành công
  }
  return {data, isFetching, refetch, count, setCount};
};
