import { Actions, ActionsType, ModalState } from './types';

const initialState: ModalState = {
  open: false,
};

export const authReducer = (state: ModalState = initialState, action: ActionsType): ModalState => {
  switch (action.type) {
    case Actions.OPEN_MODAL:
      return {
        ...state,
        open: true,
      };
    default:
      return state;
  }
};
