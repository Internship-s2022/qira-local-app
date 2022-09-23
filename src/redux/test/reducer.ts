import { Actions } from './types';

const initialState = {
  message: '',
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.RESET_STORE:
      return {
        ...state,
        message: 'Is working',
      };
    default:
      return state;
  }
};
