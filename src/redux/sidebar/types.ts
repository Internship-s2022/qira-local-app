import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type ActionsType = ActionType<typeof actions>;

export interface sidebarState {
  isOpen: boolean;
}

export enum Actions {
  OPEN_SIDEBAR = 'OPEN_SIDEBAR',
  CLOSE_SIDEBAR = 'CLOSE_SIDEBAR',
}
