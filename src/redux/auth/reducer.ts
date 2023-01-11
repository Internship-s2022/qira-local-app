import { Actions, ActionsType, AuthState } from './types';

const initialState: AuthState = {
  user: undefined,
  token: undefined,
  role: undefined,
  isFetching: false,
  message: '',
  error: undefined,
};

export const authReducer = (state: AuthState = initialState, action: ActionsType): AuthState => {
  switch (action.type) {
    case Actions.LOGIN_PENDING:
    case Actions.LOGOUT_PENDING:
    case Actions.GET_AUTH_PENDING:
    case Actions.REGISTER_PENDING:
    case Actions.UPDATE_CLIENT_INFORMATION_PENDING:
    case Actions.UPDATE_PASSWORD_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        message: 'Login successfully',
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        message: 'Register successfully',
      };
    case Actions.LOGIN_ERROR:
    case Actions.LOGOUT_ERROR:
    case Actions.GET_AUTH_ERROR:
    case Actions.REGISTER_ERROR:
    case Actions.UPDATE_CLIENT_INFORMATION_ERROR:
    case Actions.UPDATE_PASSWORD_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
        message: action.payload.message,
      };
    case Actions.LOGOUT_SUCCESS:
      return initialState;
    case Actions.GET_AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        user: action.payload,
      };
    case Actions.SET_AUTHENTICATION:
      return {
        ...state,
        isFetching: false,
        error: false,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
    case Actions.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
      };
    case Actions.RESET_MESSAGE:
      return {
        ...state,
        message: '',
      };
    case Actions.RESET_ERROR:
      return {
        ...state,
        error: undefined,
      };
    case Actions.UPDATE_CLIENT_INFORMATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        user: action.payload,
      };
    case Actions.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};
