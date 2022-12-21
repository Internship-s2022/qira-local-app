import React from 'react';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedStore } from 'src/redux/__mocks__';
import * as Store from 'src/redux/store';
import customRender from 'src/utils/tests/testUtils';

import ProductForm from '.';

const mockedDispatch = jest.fn();

describe('Products form - Funcionality test', () => {
  const mockFunction = () => {
    jest.spyOn(Store, 'useAppDispatch').mockReturnValue(mockedDispatch);
  };

  const mockedInitialState = {
    ...mockedStore,
    products: { ...mockedStore.products, isFetching: false },
  };

  it('Should render the product form component correctly', async () => {
    mockFunction();
    const { getByTestId } = customRender(<ProductForm />, mockedInitialState);

    expect(getByTestId('product-form')).toBeInTheDocument();
    expect(getByTestId('back-button')).toBeInTheDocument();
  });

  it('Should check the name input correct rendering and label ', () => {
    mockFunction();
    const { getByTestId, getByText } = customRender(<ProductForm />, mockedInitialState);
    expect(getByTestId('name-fieldTest')).toBeInTheDocument();
    expect(getByText('Nombre del producto *')).toBeInTheDocument();
  });

  it('Should show error when the input is left empty', async () => {
    mockFunction();
    const { getByTestId, findByText, queryByText } = customRender(
      <ProductForm />,
      mockedInitialState,
    );
    const nameInput = getByTestId('name-fieldTest');
    expect(nameInput).toBeInTheDocument();
    let error = queryByText('Campo requerido.');
    expect(error).not.toBeInTheDocument();
    userEvent.click(nameInput);
    userEvent.tab();
    error = await findByText('Campo requerido.');
    expect(error).toBeInTheDocument();
  });

  it('Should show error when input text is invalid', async () => {
    mockFunction();
    const { getByTestId, findByText, queryByText } = customRender(
      <ProductForm />,
      mockedInitialState,
    );
    const nameInput = getByTestId('name-fieldTest');
    expect(nameInput).toBeInTheDocument();
    let error = queryByText('Mínimo 3 caracteres.');
    expect(error).not.toBeInTheDocument();
    userEvent.click(nameInput);
    fireEvent.change(nameInput, { target: { value: 'aa' } });
    userEvent.tab();
    error = await findByText('Mínimo 3 caracteres.');
    expect(error).toBeInTheDocument();
  });

  it('Should not show error if input text is valid', () => {
    mockFunction();
    const { getByTestId, queryByText } = customRender(<ProductForm />, mockedInitialState);
    const nameInput = getByTestId('name-fieldTest');
    expect(nameInput).toBeInTheDocument();
    let error = queryByText('Mínimo 3 caracteres.');
    expect(error).not.toBeInTheDocument();
    userEvent.click(nameInput);
    fireEvent.change(nameInput, { target: { value: 'Lionel' } });
    userEvent.tab();
    error = queryByText('Mínimo 3 caracteres.');
    expect(error).not.toBeInTheDocument();
  });
});
