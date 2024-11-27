import {useQuery, UseQueryOptions, UseQueryResult} from '@tanstack/react-query';
import {getInfoUser} from './home.api';
import {UserResponse} from './typeHome';
export const QueryGetUserinfo = (): UseQueryResult<UserResponse> => {
  const queryKey = ['getUserInfo'];
  const _options: UseQueryOptions<any, any, any> = {
    queryKey: queryKey,
    queryFn: () => getInfoUser(),
    enabled: true,
  };
  return useQuery(_options);
};
