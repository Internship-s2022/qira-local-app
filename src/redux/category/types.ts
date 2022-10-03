import { AxiosResponse } from 'axios';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { api } from 'src/config/api';

import { RootState } from '../store';

interface Image {
  key: string;
  url: string;
}
export interface Category {
  name: string;
  image: Image;
  isActive: boolean;
  logicDelete: boolean;
}

const responseBody = (response: AxiosResponse) => response.data;

export const categoryRequest = {
  get: (url: string) => api.get<Category[]>(url).then(responseBody),
};

export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, Action<null>>>;
