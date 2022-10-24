import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppDispatch, RootState } from 'src/redux/store';

import AdminRouter from './components/pages/admin';
import ClientRouter from './components/pages/client';
import { SharedModal } from './components/shared/ui/modal';
import PrivateRoute from './helper/routes/private-routes';
import { setAuthentication } from './redux/auth/actions';
import { UserRole } from './types';

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
      <SharedModal />
      <Routes>
        <Route path="*" element={<ClientRouter />} />
        <Route element={<PrivateRoute role={UserRole.ADMIN} />}>
          <Route path="/admin/*" element={<AdminRouter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
