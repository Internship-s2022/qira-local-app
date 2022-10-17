import { ModalAction, ModalActionTypes, ModalState } from './types';

const initialState = {
  modal: false,
};
export const modalReducer = (state: ModalState = initialState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalActionTypes.ShowModal:
      return {
        ...state,
        modal: true,
      };
    case ModalActionTypes.HideModal:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
};
