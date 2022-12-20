import React from 'react';

import { mockedStore } from 'src/redux/__mocks__';
import * as Store from 'src/redux/store';
import customRender from 'src/utils/tests/testUtils';

import ClientForm from '.';

const mockedDispatch = jest.fn();

describe('Client From - Unit Test', () => {
  const mockFunction = () => {
    jest.spyOn(Store, 'useAppDispatch').mockReturnValue(mockedDispatch);
  };
  const mockedInitialState = {
    ...mockedStore,
    clients: { ...mockedStore.clients, isFetching: false },
  };

  it('Should render the component correctly', async () => {
    mockFunction();
    const component = customRender(<ClientForm />, mockedInitialState);
    await component.getByTestId('client-form');
  });
});
