import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainRoutes } from 'src/constants';
import { AppDispatch, RootState } from 'src/redux/store';

import Layout from './components/layout';
import AdminLayout from './components/layout/admin';
import { Home, Login, Storybook } from './components/pages';
import AdminRouter from './components/pages/admin';
import { setAuthentication } from './redux/auth/actions';

const App = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();

  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const userCredentials = {
      user: JSON.parse(sessionStorage.getItem('user')),
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role'),
    };
    if (!token && userCredentials) {
      dispatch(setAuthentication(userCredentials));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={MainRoutes.HOME} element={<Home />} />
          <Route path={MainRoutes.LOGIN} element={<Login />} />
          <Route path={MainRoutes.STORYBOOK} element={<Storybook />} />
        </Route>
      </Routes>
      <AdminRouter />
    </BrowserRouter>
  );
};

export default App;
