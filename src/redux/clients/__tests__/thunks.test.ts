import { AxiosResponse } from 'axios';

import { ApiResponse, RootState, store } from 'src/redux/store';
import { CustomResponse } from 'src/types/axios';

import * as API from '../api';
import { initialState } from '../reducer';
import { activateClient, getClient, getClients, inactivateClient, updateClient } from '../thunk';
import { Actions } from '../types';
import { mockedClient } from './actions.test';

describe('Client thunks', () => {
  const mockedDispatch = jest.fn();
  const mockedApiResponse: CustomResponse<unknown> = {
    data: undefined,
    error: undefined,
    status: undefined,
    message: undefined,
    // config: undefined,
    // headers: undefined,
    // statusText: undefined,
  };
  const customState: RootState = {
    clients: { ...initialState, selectedClient: mockedClient },
    auth: undefined,
    categories: undefined,
    exchangeRate: undefined,
    modal: undefined,
    orders: undefined,
    products: undefined,
    shoppingCart: undefined,
    sidebar: undefined,
  };

  // it('GET all clients - Should dispatch the pending and success actions', async () => {
  //   const mockedResponse = { ...mockedApiResponse, data: [mockedClient] };
  //   jest.spyOn(API, 'getClients').mockResolvedValue(mockedResponse);
  //   const functionResult = getClients();
  //   await functionResult(mockedDispatch);
  //   expect(mockedDispatch).toHaveBeenCalledWith({
  //     type: Actions.GET_CLIENTS_PENDING,
  //   });
  //   expect(mockedDispatch).toHaveBeenCalledWith({
  //     type: Actions.GET_CLIENTS_SUCCESS,
  //     payload: mockedResponse,
  //   });
  // });
});
