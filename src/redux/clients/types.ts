import { ActionType } from 'typesafe-actions';

import { IvaCondition } from 'src/types';

import { Address } from '../auth/types';
import * as actions from './actions';

export interface Client {
  _id: string;
  businessName: string;
  cuit: string;
  ivaCondition: IvaCondition;
  address: Address;
  phoneNumber: string;
  email: string;
  isActive: boolean;
  logicDelete: boolean;
  approved: boolean;
  firebaseUid: string;
}

export interface ClientState {
  clients: Client[];
  selectedClient: Client;
  isFetching: boolean;
  error: unknown;
  message: string;
}
export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS',
  GET_CLIENTS_PENDING = 'GET_CLIENTS_PENDING',
  GET_CLIENTS_ERROR = 'GET_CLIENTS_ERROR',

  GET_CLIENT_SUCCESS = 'GET_CLIENT_SUCCESS',
  GET_CLIENT_PENDING = 'GET_CLIENT_PENDING',
  GET_CLIENT_ERROR = 'GET_CLIENT_ERROR',

  ACTIVATE_CLIENT_SUCCESS = 'ACTIVATE_CLIENT_SUCCESS',
  ACTIVATE_CLIENT_PENDING = 'ACTIVATE_CLIENT_PENDING',
  ACTIVATE_CLIENT_ERROR = 'ACTIVATE_CLIENT_ERROR',

  INACTIVATE_CLIENT_SUCCESS = 'INACTIVATE_CLIENT_SUCCESS',
  INACTIVATE_CLIENT_PENDING = 'INACTIVATE_CLIENT_PENDING',
  INACTIVATE_CLIENT_ERROR = 'INACTIVATE_CLIENT_ERROR',

  UPDATE_CLIENT_SUCCESS = 'UPDATE_CLIENT_SUCCESS',
  UPDATE_CLIENT_PENDING = 'UPDATE_CLIENT_PENDING',
  UPDATE_CLIENT_ERROR = 'UPDATE_CLIENT_ERROR',

  APPROVE_CLIENT_SUCCESS = 'APPROVE_CLIENT_SUCCESS',
  APPROVE_CLIENT_PENDING = 'APPROVE_CLIENT_PENDING',
  APPROVE_CLIENT_ERROR = 'APPROVE_CLIENT_ERROR',
}
