import { Actions, ActionsType, ClientState } from './types';

const initialState: ClientState = {
  clients: [],
  selectedClient: undefined,
  isFetching: false,
  error: undefined,
  message: '',
};
let newListClients = [];

export const clientReducer = (state = initialState, action: ActionsType): ClientState => {
  switch (action.type) {
    case Actions.GET_CLIENTS_PENDING:
    case Actions.ACTIVATE_CLIENT_PENDING:
    case Actions.INACTIVATE_CLIENT_PENDING:
    case Actions.GET_CLIENT_PENDING:
    case Actions.UPDATE_CLIENT_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_CLIENTS_ERROR:
    case Actions.ACTIVATE_CLIENT_ERROR:
    case Actions.INACTIVATE_CLIENT_ERROR:
    case Actions.GET_CLIENT_ERROR:
    case Actions.UPDATE_CLIENT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.GET_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.payload,
        isFetching: false,
        error: undefined,
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
    case Actions.GET_CLIENT_SUCCESS:
      return {
        ...state,
        selectedClient: action.payload,
        isFetching: false,
      };
    case Actions.UPDATE_CLIENT_SUCCESS: {
      const newList = state.clients.map((client) => {
        if (client._id === action.payload._id) {
          return action.payload;
        }
        return client;
      });
      return {
        ...state,
        isFetching: false,
        clients: newList,
      };
    }
    default:
      return state;
  }
};
