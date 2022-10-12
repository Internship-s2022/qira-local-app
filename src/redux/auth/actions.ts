import { action, createAsyncAction } from 'typesafe-actions';

import { Actions, ApiResponse, User, UserCredentials } from '../store';

export const loginActions = createAsyncAction(
  Actions.LOGIN_PENDING,
  Actions.LOGIN_SUCCESS,
  Actions.LOGIN_ERROR,
)<string, UserCredentials, ApiResponse<unknown>>();

export const getAuthUserActions = createAsyncAction(
  Actions.GET_AUTH_PENDING,
  Actions.GET_AUTH_SUCCESS,
  Actions.GET_AUTH_ERROR,
)<string, User, ApiResponse<unknown>>();

export const logoutUser = () => action(Actions.LOGOUT_USER);
export const setAuthentication = (user: UserCredentials) =>
  action(Actions.SET_AUTHENTICATION, user);
