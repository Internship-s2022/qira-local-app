import React from 'react';
import { fireEvent } from '@testing-library/react';

import { mockedStore } from 'src/redux/__mocks__';
import { mockedProduct } from 'src/redux/products/actions.test';
import * as Store from 'src/redux/store';
import customRender from 'src/utils/tests/testUtils';

import Products from '.';

const mockedDispatch = jest.fn();

describe('Products list - Unit test', () => {
  const mockFunction = () => {
    jest.spyOn(Store, 'useAppDispatch').mockReturnValue(mockedDispatch);
  };

  const mockedInitialState = {
    ...mockedStore,
    products: { ...mockedStore.products, products: [mockedProduct], isFetching: false },
  };

  it('Should render the product list component correctly', () => {
    mockFunction();
    const { getByTestId } = customRender(<Products />, mockedInitialState);

    expect(getByTestId('products-list')).toBeInTheDocument();
    expect(getByTestId('Editar-btn')).toBeInTheDocument();
  });

  it('Should open the delete confirmation modal when clicking', async () => {
    mockFunction();
    const { getByTestId } = customRender(<Products />, mockedInitialState);
    const deleteBtn = getByTestId('Borrar-btn');

    expect(deleteBtn).toBeInTheDocument();
    fireEvent.click(deleteBtn);

    await expect(mockedDispatch).toHaveBeenCalled();
  });
});
