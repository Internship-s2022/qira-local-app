import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import getStore from 'src/redux/store';

const { store } = getStore();

const customRender = (children) => {
  return render(
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>,
  );
};

export default customRender;
