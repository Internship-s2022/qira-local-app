import { FormattedUser } from 'src/components/shared/ui/modal/signup/types';
import { api } from 'src/config/api';

import { User } from './types';

export const getAuthUser = (token?: string) =>
  api.get<User>('/auth/user', { headers: { token: token } });

export const registerUser = (user: FormattedUser) => api.post<User>('/auth/user', user);

export const updateClientInformationApi = (data: { phoneNumber: string }) =>
  api.patch<User>('/client/profile/update', data);

export const updatePasswordApi = (data: { password: string }) =>
  api.patch<User>('/client/profile/update/password', data);
