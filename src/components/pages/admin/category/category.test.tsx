import React from 'react';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedStore } from 'src/redux/__mocks__/mocks';
import * as Store from 'src/redux/store';
import customRender from 'src/utils/tests/testUtils';

import CategoryForm from '.';

const mockedDispatch = jest.fn();

describe('Category From - Unit Test', () => {
  describe('Render tests', () => {
    const mockFuntion = () => {
      jest.spyOn(Store, 'useAppDispatch').mockReturnValue(mockedDispatch);
    };
    it('Should render the component correctly', async () => {
      mockFuntion();
      const component = customRender(<CategoryForm />, mockedStore);
      await component.getByTestId('category-form');
    });
    it('Should check name input is rendering well', () => {
      const { getByTestId } = customRender(<CategoryForm />, mockedStore);
      expect(getByTestId('name-fieldTest')).toBeInTheDocument();
    });
  });

  describe('Functionality tests', () => {
    describe('Name input', () => {
      it('Should show error if the input is clicked and left empty', async () => {
        const { getByTestId, findByText, queryByText } = customRender(
          <CategoryForm />,
          mockedStore,
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
      it('Should show error if input text is invalid', async () => {
        const { getByTestId, findByText, queryByText } = customRender(
          <CategoryForm />,
          mockedStore,
        );
        const nameInput = getByTestId('name-fieldTest');
        expect(nameInput).toBeInTheDocument();
        let error = queryByText('Debe contener al menos 3 caracteres.');
        expect(error).not.toBeInTheDocument();
        userEvent.click(nameInput);
        fireEvent.change(nameInput, { target: { value: 'a' } });
        userEvent.tab();
        error = await findByText('Debe contener al menos 3 caracteres.');
        expect(error).toBeInTheDocument();
      });
      it('should not show error if input text is valid', () => {
        const { getByTestId, queryByText } = customRender(<CategoryForm />, mockedStore);
        const firstNameInput = getByTestId('name-fieldTest');
        expect(firstNameInput).toBeInTheDocument();
        let error = queryByText('Debe contener al menos 3 caracteres.');
        expect(error).not.toBeInTheDocument();
        userEvent.click(firstNameInput);
        fireEvent.change(firstNameInput, { target: { value: 'Nicolo' } });
        userEvent.tab();
        error = queryByText('Debe contener al menos 3 caracteres.');
        expect(error).not.toBeInTheDocument();
      });
    });
  });
});
