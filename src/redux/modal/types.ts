import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

export interface ModalState {
  open: boolean;
}
