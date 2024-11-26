export interface BaseResponse {
  err: number;
  mess: string;
}
export interface ApiResponse<T> extends BaseResponse {
  user: T; // Dữ liệu có thể thay đổi dựa trên Generics
}
