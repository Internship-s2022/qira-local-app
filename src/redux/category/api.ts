import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';

import { api, responseBody } from 'src/config/api';

import { RootState } from '../store';
import * as actions from './actions';
import { Category } from './types';

export const getCategories = () => api.get<Category[]>('/category').then(responseBody);

export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, Action<null>>>;
export type ActionsType = ActionType<typeof actions>;
