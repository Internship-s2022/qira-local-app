import { Actions, ActionsType, ModalState } from './types';

export const initialState = {
  isOpen: false,
  type: undefined,
  options: undefined,
};
export const modalReducer = (state: ModalState = initialState, action: ActionsType): ModalState => {
  switch (action.type) {
    case Actions.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        type: action.payload.type,
        options: action.payload.options,
      };
    case Actions.CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};
