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
}

export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

export enum ModalTypes {
  BASIC_MODAL = 'BASIC_MODAL',
  UPLOAD_IMAGE = 'UPLOAD_IMAGE',
}