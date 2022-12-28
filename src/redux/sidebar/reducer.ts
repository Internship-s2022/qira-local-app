import { Actions, ActionsType, sidebarState } from './types';

export const initialState = {
  isOpen: false,
};

export const sidebarReducer = (
  state: sidebarState = initialState,
  action: ActionsType,
): sidebarState => {
  switch (action.type) {
    case Actions.OPEN_SIDEBAR:
      return {
        ...state,
        isOpen: true,
      };
    case Actions.CLOSE_SIDEBAR:
      return initialState;
    default:
      return state;
  }
};
