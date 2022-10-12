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
    case Actions.GET_AUTH_PENDING:
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
    case Actions.LOGIN_ERROR:
    case Actions.GET_AUTH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
        message: action.payload.message,
      };
    case Actions.LOGOUT_USER:
      sessionStorage.clear();
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
    default:
      return state;
  }
};
