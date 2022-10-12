import { User } from '../store';
export interface AuthState {
  user: User;
  token: string;
  role: string;
  isFetching: boolean;
  message: string;
  error: unknown;
}
