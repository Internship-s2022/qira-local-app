import { formattedUser } from 'src/components/shared/ui/modal/signup/types';
import { api } from 'src/config/api';

import { User } from './types';

export const getAuthUser = (token?: string) =>
  api.get<User>('/auth/user', { headers: { token: token } });

export const registerUser = (user: formattedUser) => api.post<User>('/auth/user', user);

export const updateClientInformationApi = (data: { phoneNumber: string }) =>
  api.patch<User>('/client/profile/update', data);
