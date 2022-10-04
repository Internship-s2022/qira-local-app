import { ActionType } from 'typesafe-actions';

import { api, responseBody } from 'src/config/api';

import * as actions from './actions';
import { Category } from './types';

export const getCategories = () => api.get<Category[]>('/category').then(responseBody);

export type ActionsType = ActionType<typeof actions>;
