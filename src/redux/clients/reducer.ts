import { Actions, ActionsType, ClientState } from './types';

const initialState = {
  clients: [],
  isFetching: false,
  error: undefined,
  message: '',
};
let newListClients = [];

export const clientReducer = (state: ClientState = initialState, action: ActionsType) => {
  switch (action.type) {
    case Actions.GET_CLIENT_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_CLIENT_SUCCESS:
      return {
        ...state,
        clients: action.payload,
        isFetching: false,
        error: undefined,
      };
    case Actions.GET_CLIENT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.ACTIVATE_CLIENT_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.ACTIVATE_CLIENT_SUCCESS:
      newListClients = state.clients.map((client) => {
        if (client._id === action.payload._id) {
          return action.payload;
        } else {
          return client;
        }
      });
      return {
        ...state,
        clients: newListClients,
        isFetching: false,
      };
    case Actions.ACTIVATE_CLIENT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.INACTIVATE_CLIENT_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.INACTIVATE_CLIENT_SUCCESS:
      newListClients = state.clients.map((client) => {
        if (client._id === action.payload._id) {
          return action.payload;
        } else {
          return client;
        }
      });
      return {
        ...state,
        clients: newListClients,
        isFetching: false,
      };
    case Actions.INACTIVATE_CLIENT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
