import { createAsyncAction } from 'typesafe-actions';

import { ApiResponse } from '../store';
import { Actions, Client } from './types';

export const getClientsActions = createAsyncAction(
  Actions.GET_CLIENTS_PENDING,
  Actions.GET_CLIENTS_SUCCESS,
  Actions.GET_CLIENTS_ERROR,
)<void, Client[], ApiResponse<unknown>>();

export const inactivateActions = createAsyncAction(
  Actions.INACTIVATE_CLIENT_PENDING,
  Actions.INACTIVATE_CLIENT_SUCCESS,
  Actions.INACTIVATE_CLIENT_ERROR,
)<void, Client, ApiResponse<unknown>>();

export const activateActions = createAsyncAction(
  Actions.ACTIVATE_CLIENT_PENDING,
  Actions.ACTIVATE_CLIENT_SUCCESS,
  Actions.ACTIVATE_CLIENT_ERROR,
)<void, Client, ApiResponse<unknown>>();

export const getClientActions = createAsyncAction(
  Actions.GET_CLIENT_PENDING,
  Actions.GET_CLIENT_SUCCESS,
  Actions.GET_CLIENT_ERROR,
)<void, Client, ApiResponse<unknown>>();

export const updateClientActions = createAsyncAction(
  Actions.UPDATE_CLIENT_PENDING,
  Actions.UPDATE_CLIENT_SUCCESS,
  Actions.UPDATE_CLIENT_ERROR,
)<void, Client, ApiResponse<unknown>>();
