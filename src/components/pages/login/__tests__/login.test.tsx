import React from 'react';

import customRender from 'src/utils/tests/testUtils';

import Login from '..';

describe('Login - Unit test', () => {
  it('should render the component correctly', () => {
    customRender(<Login />);
  });
});
