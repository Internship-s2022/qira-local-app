import { ActionType } from 'typesafe-actions';

import { IvaCondition } from 'src/types';

import * as actions from './actions';

export interface AuthState {
  user: User;
  token: string;
  role: string;
  isFetching: boolean;
  message: string;
  error: unknown;
}

export interface Address {
  province: string;
  city: string;
  zipCode: string;
  street: string;
}

export interface User {
  _id: string;
  firebaseUid: string;
  businessName: string;
  cuit: string;
  ivaCondition: IvaCondition;
  address: Address;
  phoneNumber: string;
  email: string;
  isActive: boolean;
  logicDelete: boolean;
  firstName?: string;
  lastName?: string;
}

export interface UserCredentials {
  user: User;
  token: string;
  role: string;
}

export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  LOGIN_PENDING = 'LOGIN_PENDING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',

  REGISTER_PENDING = 'REGISTER_PENDING',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_ERROR = 'REGISTER_ERROR',

  LOGOUT_USER = 'LOGOUT_USER',

  GET_AUTH_PENDING = 'GET_AUTH_PENDING',
  GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS',
  GET_AUTH_ERROR = 'GET_AUTH_ERROR',

  SET_AUTHENTICATION = 'SET_AUTHENTICATION',
  SET_TOKEN = 'SET_TOKEN',

  RESET_MESSAGE = 'RESET_MESSAGE',

  UPDATE_CLIENT_INFORMATION_PENDING = 'UPDATE_CLIENT_INFORMATION_PENDING',
  UPDATE_CLIENT_INFORMATION_SUCCESS = 'UPDATE_CLIENT_INFORMATION_SUCCESS',
  UPDATE_CLIENT_INFORMATION_ERROR = 'UPDATE_CLIENT_INFORMATION_ERROR',

  LOGOUT_PENDING = 'LOGOUT_PENDING',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_ERROR = 'LOGOUT_ERROR',
}
