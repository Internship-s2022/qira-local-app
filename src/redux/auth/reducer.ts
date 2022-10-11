import { Actions, ActionsType } from './types';

const initialState = {
  user: undefined,
  token: undefined,
  role: undefined,
  isPending: false,
  message: '',
  error: undefined,
};

export const authReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case Actions.LOGIN_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        isPending: false,
        error: false,
        message: 'Login successfully',
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
    case Actions.LOGIN_ERROR:
      return {
        ...state,
        isPending: false,
        error: true,
        message: 'The email or password are incorrect',
      };
    case Actions.LOGOUT_USER:
      return {
        ...state,
        user: undefined,
      };
    case Actions.GET_AUTH_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case Actions.GET_AUTH_SUCCESS:
      return {
        ...state,
        isPending: false,
        error: false,
        user: action.payload,
      };
    case Actions.GET_AUTH_ERROR:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    case Actions.SET_AUTHENTICATION:
      return {
        ...state,
        isPending: false,
        error: false,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
    case Actions.RESET_MESSAGE:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};
