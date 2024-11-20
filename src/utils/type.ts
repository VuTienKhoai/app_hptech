import {UseQueryOptions} from '@tanstack/react-query';

export interface IQueryParams<
  TParams = any,
  TOptions = UseQueryOptions<any, any, any>,
> {
  options?: TOptions;
  params?: TParams;
}
export interface IQueryParamsBody<
  TParams = any,
  TOptions = UseQueryOptions<any, any, any>,
> {
  options?: TOptions;
  params?: TParams;
  body?: any;
}
export interface IAlert {
  title: string;
  message: string;
  negativeButton: string;
  positiveButton: string;
  confirmCallback: any;
}
export interface DataResponse {
  success: boolean;
  message: string;
  data: any | number;
  // Các thuộc tính khác mà bạn mong đợi
}
