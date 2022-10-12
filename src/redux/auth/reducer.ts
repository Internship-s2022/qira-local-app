import { Actions, AuthActionsType } from '../store';
import { AuthState } from './types';

const initialState: AuthState = {
  user: undefined,
  token: undefined,
  role: undefined,
  isFetching: false,
  message: '',
  error: undefined,
};

export const authReducer = (state: AuthState = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case (Actions.LOGIN_PENDING, Actions.GET_AUTH_PENDING):
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
    case (Actions.LOGIN_ERROR, Actions.GET_AUTH_ERROR):
      return {
        ...state,
        isFetching: false,
        error: true,
        message: action.payload,
      };
    case Actions.LOGOUT_USER:
      sessionStorage.clear();
      return {
        ...state,
        user: undefined,
        token: undefined,
        role: undefined,
      };
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
    default:
      return state;
  }
};
