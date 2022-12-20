import {
  activateActions,
  getClientActions,
  getClientsActions,
  inactivateActions,
  updateClientActions,
} from '../actions';
import { clientReducer, initialState } from '../reducer';
import { ActionsType, ClientState } from '../types';
import { mockedClient, mockedError, mockedInactiveClient } from './actions.test';

const mockedInitialState: ClientState = {
  clients: [mockedClient],
  error: undefined,
  isFetching: false,
  message: '',
  selectedClient: undefined,
};

describe('Client reducer', () => {
  it('Should return the initial state by default', () => {
    const result = clientReducer(initialState, { type: '', payload: '' } as unknown as ActionsType);
    expect(result).toBe(initialState);
  });

  it('Should return the correct state for each PENDING action', () => {
    const expectedResult = { isFetching: true };
    expect(clientReducer(initialState, getClientsActions.request())).toMatchObject(expectedResult);
    expect(clientReducer(initialState, getClientActions.request())).toMatchObject(expectedResult);
    expect(clientReducer(initialState, activateActions.request())).toMatchObject(expectedResult);
    expect(clientReducer(initialState, inactivateActions.request())).toMatchObject(expectedResult);
    expect(clientReducer(initialState, updateClientActions.request())).toMatchObject(
      expectedResult,
    );
  });

  it('Should return the correct state for each ERROR action', () => {
    const expectedResult = {
      isFetching: false,
      error: mockedError.error,
      message: mockedError.message,
    };
    expect(clientReducer(initialState, getClientsActions.failure(mockedError))).toMatchObject(
      expectedResult,
    );
    expect(clientReducer(initialState, getClientActions.failure(mockedError))).toMatchObject(
      expectedResult,
    );
    expect(clientReducer(initialState, activateActions.failure(mockedError))).toMatchObject(
      expectedResult,
    );
    expect(clientReducer(initialState, inactivateActions.failure(mockedError))).toMatchObject(
      expectedResult,
    );
    expect(clientReducer(initialState, updateClientActions.failure(mockedError))).toMatchObject(
      expectedResult,
    );
  });

  it('Should return the correct state for GET_CLIENTS_SUCCESS action', () => {
    const mockedPayload = [mockedClient];
    expect(clientReducer(initialState, getClientsActions.success(mockedPayload))).toMatchObject({
      isFetching: false,
      error: undefined,
      clients: mockedPayload,
    });
  });

  it('Should return the correct state for GET_CLIENT_SUCCESS action', () => {
    expect(clientReducer(initialState, getClientActions.success(mockedClient))).toMatchObject({
      isFetching: false,
      selectedClient: mockedClient,
    });
  });

  it('Should return the correct state for ACTIVATE_CLIENT_SUCCESS & INACTIVATE_CLIENT_SUCCESS', () => {
    const expectedActivateResult = { ...mockedInitialState, clients: [mockedClient] };
    const expectedInactivateResult = { ...mockedInitialState, clients: [mockedInactiveClient] };
    expect(clientReducer(mockedInitialState, activateActions.success(mockedClient))).toMatchObject(
      expectedActivateResult,
    );
    expect(
      clientReducer(mockedInitialState, inactivateActions.success(mockedInactiveClient)),
    ).toMatchObject(expectedInactivateResult);
  });
});
