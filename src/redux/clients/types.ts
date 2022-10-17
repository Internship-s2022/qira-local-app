import { ActionType } from 'typesafe-actions';

import { IvaCondition } from 'src/types';

import { Address } from '../auth/types';
import * as actions from './actions';

export interface Client {
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

export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  GET_CLIENT_SUCCESS = 'GET_CLIENT_SUCCESS',
  GET_CLIENT_PENDING = 'GET_CLIENT_PENDING',
  GET_CLIENT_ERROR = 'GET_CLIENT_ERROR',
}
