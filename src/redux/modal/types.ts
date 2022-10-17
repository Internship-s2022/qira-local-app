// import { ActionType } from 'typesafe-actions';
// import * as actions from './actions';
// export type ActionsType = ActionType<typeof actions>;

export enum ModalActionTypes {
  ShowModal,
  HideModal,
}
export interface ModalState {
  modal: boolean;
}
export interface ModalAction {
  type: ModalActionTypes;
  payload?: any;
}
