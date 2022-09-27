import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { MainRoutes } from 'src/constants';

import Layout from './components/layout';
import { Home, Login } from './components/pages';
import store from './redux/store';
import reportWebVitals from './report-web-vitals';
import { mainTheme } from './utils/materialTheme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path={MainRoutes.HOME} element={<Home />} />
              <Route path={MainRoutes.LOGIN} element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
