import React from 'react';
import { fireEvent } from '@testing-library/react';

import { mockedStore } from 'src/redux/__mocks__/mocks';
import { mockedCategory } from 'src/redux/category/__tests__/actions.test';
import * as Store from 'src/redux/store';
import customRender from 'src/utils/tests/testUtils';

import Categories from '.';

const mockedDispatch = jest.fn();

describe('Categories - Unit Test', () => {
  const mockFunction = () => {
    jest.spyOn(Store, 'useAppDispatch').mockReturnValue(mockedDispatch);
  };
  const mockedInitialState = {
    ...mockedStore,
    categories: { ...mockedStore.categories, categories: [mockedCategory], isFetching: false },
  };
  it('Should render the component correctly', async () => {
    mockFunction();
    const component = customRender(<Categories />, mockedInitialState);
    await component.getByTestId('categories-list');
  });
  it('Should render modal delete correctly', async () => {
    mockFunction();
    const component = customRender(<Categories />, mockedInitialState);
    const btn = await component.findByTestId('Borrar-btn');
    expect(component.getByTestId('Borrar-btn')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(mockedDispatch).toHaveBeenCalled();
  });
});
