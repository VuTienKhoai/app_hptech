import {useQuery, UseQueryOptions, UseQueryResult} from '@tanstack/react-query';
import {LogOut} from './user.api';

// export const QueryLogOut = (): UseQueryResult<any> => {
//   const queryKey = ['queryLogOut'];
//   const _options: UseQueryOptions<any, any, any> = {
//     queryKey: queryKey,
//     queryFn: () => LogOut(),
//     enabled: false,
//   };
//   return useQuery(_options);
// };
