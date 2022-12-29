import React from 'react';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedStore } from 'src/redux/__mocks__';
import * as Store from 'src/redux/store';
import customRender from 'src/utils/tests/testUtils';

import ClientForm from '.';

const mockedDispatch = jest.fn();

describe('Client Form - Unit Test', () => {
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
    const form = await component.getByTestId('client-form');
    expect(form).toBeInTheDocument();
  });

  describe('Email input', () => {
    it('should show error if the input is clicked and left empty', async () => {
      mockFunction();
      const { getByTestId, findByText, queryByText } = customRender(
        <ClientForm />,
        mockedInitialState,
      );
      const emailInput = getByTestId('email-fieldTest');
      expect(emailInput).toBeInTheDocument();
      let error = queryByText('Campo requerido.');
      expect(error).not.toBeInTheDocument();
      userEvent.click(emailInput);
      userEvent.tab();
      error = await findByText('Campo requerido.');
      expect(error).toBeInTheDocument();
    });
    it('should show error if input text is invalid', async () => {
      mockFunction();
      const { getByTestId, findByText, queryByText } = customRender(
        <ClientForm />,
        mockedInitialState,
      );
      const emailInput = getByTestId('email-fieldTest');
      expect(emailInput).toBeInTheDocument();
      let error = queryByText('Debe tener formato válido de email.');
      expect(error).not.toBeInTheDocument();
      userEvent.click(emailInput);
      fireEvent.change(emailInput, { target: { value: 'invalid.email@gmail' } });
      userEvent.tab();
      error = await findByText('Debe tener formato válido de email.');
      expect(error).toBeInTheDocument();
    });
    it('should not show error if input text is valid', () => {
      mockFunction();
      const { getByTestId, queryByText } = customRender(<ClientForm />, mockedInitialState);
      const emailInput = getByTestId('email-fieldTest');
      expect(emailInput).toBeInTheDocument();
      let error = queryByText('Debe tener formato válido de email.');
      expect(error).not.toBeInTheDocument();
      userEvent.click(emailInput);
      fireEvent.change(emailInput, { target: { value: 'luchito@radiumrocket.com' } });
      userEvent.tab();
      error = queryByText('Debe tener formato válido de email.');
      expect(error).not.toBeInTheDocument();
    });
  });
});
