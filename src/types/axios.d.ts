/* eslint-disable */
import axios from 'axios';

interface CustomResponse<T> {
  data: T;
  message: string;
  error: boolean;
  status: number;
}

declare module 'axios' {
  export interface AxiosResponse<T> extends Promise<CustomResponse<T>> {}
}
