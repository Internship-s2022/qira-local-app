import { action, createAsyncAction } from 'typesafe-actions';

import { UserRole } from 'src/types';

import { ApiResponse } from '../store';
import { Actions, User, UserCredentials } from './types';

export const loginActions = createAsyncAction(
  Actions.LOGIN_PENDING,
  Actions.LOGIN_SUCCESS,
  Actions.LOGIN_ERROR,
)<string, UserCredentials, ApiResponse<unknown>>();

export const registerActions = createAsyncAction(
  Actions.REGISTER_PENDING,
  Actions.REGISTER_SUCCESS,
  Actions.REGISTER_ERROR,
)<void, void, ApiResponse<unknown>>();

export const getAuthUserActions = createAsyncAction(
  Actions.GET_AUTH_PENDING,
  Actions.GET_AUTH_SUCCESS,
  Actions.GET_AUTH_ERROR,
)<string, User, ApiResponse<unknown>>();

export const updateClientInformationActions = createAsyncAction(
  Actions.UPDATE_CLIENT_INFORMATION_PENDING,
  Actions.UPDATE_CLIENT_INFORMATION_SUCCESS,
  Actions.UPDATE_CLIENT_INFORMATION_ERROR,
)<void, User, ApiResponse<unknown>>();

export const updatePasswordActions = createAsyncAction(
  Actions.UPDATE_PASSWORD_PENDING,
  Actions.UPDATE_PASSWORD_SUCCESS,
  Actions.UPDATE_PASSWORD_ERROR,
)<void, User, ApiResponse<unknown>>();

export const logoutActions = createAsyncAction(
  Actions.LOGOUT_PENDING,
  Actions.LOGOUT_SUCCESS,
  Actions.LOGOUT_ERROR,
)<void, void, ApiResponse<unknown>>();

export const setAuthentication = (user: UserCredentials) =>
  action(Actions.SET_AUTHENTICATION, user);

export const setToken = (role: UserRole, token: string) =>
  action(Actions.SET_TOKEN, { role, token });

export const resetMessage = () => action(Actions.RESET_MESSAGE);
