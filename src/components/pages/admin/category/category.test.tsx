// renderice el form. un input y los mensajes de error y que desaparezcan.

import React from 'react';
import { useDispatch } from 'react-redux';

import { mockedStore } from 'src/redux/__mocks__/mocks';
import * as Store from 'src/redux/store';
import customRender from 'src/utils/tests/testUtils';

import CategoryForm from '.';

const mockedDispatch = jest.fn();

describe('Category From - Unit Test', () => {
  const mockFuntion = () => {
    jest.spyOn(Store, 'useAppDispatch').mockReturnValue(mockedDispatch);
  };
  it('Should render the component correctly', async () => {
    mockFuntion();
    const component = customRender(<CategoryForm />, mockedStore);
    await component.getByTestId('category-form');
  });
});
