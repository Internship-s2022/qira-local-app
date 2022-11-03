import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
export interface ModalState {
  isOpen: boolean;
  type: ModalTypes;
  options?: Options;
}

export interface Options {
  onCloseCallback?: (a?: any) => void;
  onConfirmCallback?: (a?: any) => void;
  message?: string;
  id?: string;
}

export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

export enum ModalTypes {
  UPLOAD_IMAGE = 'UPLOAD_IMAGE',
  UPLOAD_PDF = 'UPLOAD_PDF',
  CONFIRM = 'CONFIRM',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  LOGIN = 'LOGIN',
  ERROR = 'ERROR',
  INFO = 'INFO',
  REGISTER_FORM = 'REGISTER_FORM',
}
