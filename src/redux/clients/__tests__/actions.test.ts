import { IvaCondition } from 'src/types';

import {
  activateActions,
  getClientActions,
  getClientsActions,
  inactivateActions,
  updateClientActions,
} from '../actions';
import { Actions } from '../types';

export const mockedClient = {
  _id: '123456789012345678901234',
  businessName: 'Mocked client',
  cuit: '11223344556',
  ivaCondition: IvaCondition.registeredResponsible,
  address: {
    province: 'Santa Fe',
    city: 'Rosario',
    zipCode: '2000',
    street: 'Calle 123',
  },
  phoneNumber: '341-6133037',
  email: 'mockedemail@gmail.com',
  isActive: true,
  logicDelete: false,
  firebaseUid: '',
};

export const mockedInactiveClient = {
  ...mockedClient,
  isActive: false,
};

export const mockedError = {
  error: true,
  message: 'mocked error message',
  data: undefined,
};

describe('Client actions', () => {
  it('Should return the pending actions', () => {
    expect(getClientsActions.request()).toMatchObject({
      type: Actions.GET_CLIENTS_PENDING,
    });
    expect(getClientActions.request()).toMatchObject({
      type: Actions.GET_CLIENT_PENDING,
    });
    expect(activateActions.request()).toMatchObject({
      type: Actions.ACTIVATE_CLIENT_PENDING,
    });
    expect(inactivateActions.request()).toMatchObject({
      type: Actions.INACTIVATE_CLIENT_PENDING,
    });
    expect(updateClientActions.request()).toMatchObject({
      type: Actions.UPDATE_CLIENT_PENDING,
    });
  });

  it('Should return the error actions', () => {
    expect(getClientsActions.failure(mockedError)).toMatchObject({
      type: Actions.GET_CLIENTS_ERROR,
      payload: mockedError,
    });
    expect(getClientActions.failure(mockedError)).toMatchObject({
      type: Actions.GET_CLIENT_ERROR,
      payload: mockedError,
    });
    expect(activateActions.failure(mockedError)).toMatchObject({
      type: Actions.ACTIVATE_CLIENT_ERROR,
      payload: mockedError,
    });
    expect(inactivateActions.failure(mockedError)).toMatchObject({
      type: Actions.INACTIVATE_CLIENT_ERROR,
      payload: mockedError,
    });
    expect(updateClientActions.failure(mockedError)).toMatchObject({
      type: Actions.UPDATE_CLIENT_ERROR,
      payload: mockedError,
    });
  });

  it('Should return the success actions', () => {
    const mockedPayload = [mockedClient];
    expect(getClientsActions.success(mockedPayload)).toMatchObject({
      type: Actions.GET_CLIENTS_SUCCESS,
      payload: mockedPayload,
    });
    expect(getClientActions.success(mockedClient)).toMatchObject({
      type: Actions.GET_CLIENT_SUCCESS,
      payload: mockedClient,
    });
    expect(activateActions.success(mockedClient)).toMatchObject({
      type: Actions.ACTIVATE_CLIENT_SUCCESS,
      payload: mockedClient,
    });
    expect(inactivateActions.success(mockedClient)).toMatchObject({
      type: Actions.INACTIVATE_CLIENT_SUCCESS,
      payload: mockedClient,
    });
    expect(updateClientActions.success(mockedClient)).toMatchObject({
      type: Actions.UPDATE_CLIENT_SUCCESS,
      payload: mockedClient,
    });
  });
});
