import {useQuery, UseQueryOptions, UseQueryResult} from '@tanstack/react-query';
import {getInfoUser, LogOut} from './home.api';
import {IQueryParams} from '../../../utils/type';

export const QueryGetUserinfo = (): UseQueryResult<any> => {
  const queryKey = ['getUserInfo'];
  const _options: UseQueryOptions<any, any, any> = {
    queryKey: queryKey,
    queryFn: () => getInfoUser(),
    enabled: true,
  };
  return useQuery(_options);
};
export const QueryLogOut = (): UseQueryResult<any> => {
  const queryKey = ['queryLogOut'];
  const _options: UseQueryOptions<any, any, any> = {
    queryKey: queryKey,
    queryFn: () => LogOut(),
    enabled: false,
  };
  return useQuery(_options);
};
