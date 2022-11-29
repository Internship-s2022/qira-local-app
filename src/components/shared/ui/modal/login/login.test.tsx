import React from 'react';

import { LoginModal } from 'src/components/shared/ui/modal/login';
import customRender from 'src/utils/tests/testUtils';

describe('Login Modal - Unit test', () => {
  it('should render the component correctly', async () => {
    const component = customRender(<LoginModal />);
    await component.findByTestId('login-submit');
  });
});
