import React from 'react';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedStore } from 'src/redux/__mocks__';
import { mockedClient } from 'src/redux/clients/__tests__/actions.test';
import * as Store from 'src/redux/store';
import customRender from 'src/utils/tests/testUtils';

import Clients from '.';

const mockedDispatch = jest.fn();

describe('Client List - Unit Test', () => {
  const mockFunction = () => {
    jest.spyOn(Store, 'useAppDispatch').mockReturnValue(mockedDispatch);
  };
  const mockedInitialState = {
    ...mockedStore,
    clients: { ...mockedStore.clients, clients: [mockedClient], isFetching: false },
  };

  it('Should render the component correctly', async () => {
    mockFunction();
    const { findByTestId, getAllByRole } = customRender(<Clients />, mockedInitialState);
    const list = await findByTestId('clients-list');
    const btn = await findByTestId('Desactivar-btn');

    expect(list).toBeInTheDocument();
    expect(btn).toBeInTheDocument();

    // expect(mockedDispatch).toHaveBeenCalled();

    // const btnByrole = getAllByRole('button')[0];
    // userEvent.click(btnByrole);
    // const modalX = await findByTestId('cross-modal');
    // console.log(modalX);
    // expect(modalX).toBeInTheDocument();
  });
});
