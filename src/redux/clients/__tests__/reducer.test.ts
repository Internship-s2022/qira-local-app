import {
  activateActions,
  getClientActions,
  getClientsActions,
  inactivateActions,
  updateClientActions,
} from '../actions';
import { clientReducer, initialState } from '../reducer';
import { ActionsType } from '../types';
import { mockedClient, mockedError, mockedInactiveClient } from './actions.test';

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

  it('Should return the correct state for ACTIVATE_CLIENT_SUCCESS, INACTIVATE_CLIENT_SUCCESS & UPDATE_CLIENT_SUCCESS actions', () => {
    const expectedResult = { clients: [], isFetching: false };
    expect(clientReducer(initialState, activateActions.success(mockedClient))).toMatchObject(
      expectedResult,
    );
    expect(
      clientReducer(initialState, inactivateActions.success(mockedInactiveClient)),
    ).toMatchObject(expectedResult);
    expect(clientReducer(initialState, updateClientActions.success(mockedClient))).toMatchObject(
      expectedResult,
    );
  });
});
