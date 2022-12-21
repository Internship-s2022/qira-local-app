import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { rootReducer } from 'src/redux/store';

const customRender = (children: JSX.Element, mockedStore?) => {
  const enhancer = applyMiddleware(thunk);
  const customStore = createStore(rootReducer, mockedStore, enhancer);

  return render(
    <BrowserRouter>
      <Provider store={customStore}>{children}</Provider>
    </BrowserRouter>,
  );
};

export default customRender;
