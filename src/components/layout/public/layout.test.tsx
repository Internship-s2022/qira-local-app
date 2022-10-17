import React from 'react';
import { render, screen } from '@testing-library/react';

import PublicLayout from '.';

test('renders learn react link', () => {
  render(<PublicLayout />);
  const linkElement = screen.getByTestId('test');
  expect(linkElement).toBeInTheDocument();
});