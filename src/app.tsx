import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AdminRouter from './components/pages/admin';
import ClientRouter from './components/pages/client';
import ProfileRouter from './components/pages/client/profile';
import OrderRouter from './components/pages/order';
import { SharedModal } from './components/shared/ui/modal';
import { tokenListener } from './helper/firebase';
import PrivateRoute from './helper/routes/private-routes';
import { UserRole } from './types';

const App = (): JSX.Element => {
  useEffect(() => {
    console.log('entro');
    tokenListener();
  }, []);

  return (
    <BrowserRouter>
      <SharedModal />
      <Routes>
        <Route path="*" element={<ClientRouter />} />
        <Route element={<PrivateRoute role={UserRole.ADMIN} />}>
          <Route path="/admin/*" element={<AdminRouter />} />
        </Route>
        <Route element={<PrivateRoute role={UserRole.CLIENT} />}>
          <Route path="/order/*" element={<OrderRouter />} />
          <Route path="/profile/*" element={<ProfileRouter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
