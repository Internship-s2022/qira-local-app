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
  firebaseUid: string;
}

export interface ClientState {
  clients: Client[];
  isFetching: boolean;
  error: unknown;
  message: string;
}
export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  GET_CLIENT_SUCCESS = 'GET_CLIENT_SUCCESS',
  GET_CLIENT_PENDING = 'GET_CLIENT_PENDING',
  GET_CLIENT_ERROR = 'GET_CLIENT_ERROR',
  ACTIVATE_CLIENT_SUCCESS = 'ACTIVATE_CLIENT_SUCCESS',
  ACTIVATE_CLIENT_PENDING = 'ACTIVATE_CLIENT_PENDING',
  ACTIVATE_CLIENT_ERROR = 'ACTIVATE_CLIENT_ERROR',
  INACTIVATE_CLIENT_SUCCESS = 'INACTIVATE_CLIENT_SUCCESS',
  INACTIVATE_CLIENT_PENDING = 'INACTIVATE_CLIENT_PENDING',
  INACTIVATE_CLIENT_ERROR = 'INACTIVATE_CLIENT_ERROR',
}
