import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export interface Address {
  province: string;
  city: string;
  zipCode: string;
  street: string;
}
export enum IvaCondition {
  registeredResponsible = 'RESPONSABLE_INSCRIPTO',
  selfEmployment = 'MONOTRIBUTO',
  exempt = 'EXENTO',
  finalConsumer = 'CONSUMIDOR_FINAL',
}

export interface User {
  firebaseUid: string;
  businessName: string;
  cuit: string;
  ivaCondition: IvaCondition;
  address: Address;
  phoneNumber: string;
  email: string;
  isActive: boolean;
  logicDelete: boolean;
}

export interface UserCredentials {
  user: User;
  token: string;
  role: string;
}

export enum Actions {
  LOGIN_PENDING = 'LOGIN_PENDING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGOUT_USER = 'LOGOUT_USER',
  GET_AUTH_PENDING = 'GET_AUTH_PENDING',
  GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS',
  GET_AUTH_ERROR = 'GET_AUTH_ERROR',
  SET_AUTHENTICATION = 'SET_AUTHENTICATION',
  RESET_MESSAGE = 'RESET_MESSAGE',
}

export type ActionsType = ActionType<typeof actions>;
