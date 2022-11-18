import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AdminRouter from './components/pages/admin';
import ClientRouter from './components/pages/client';
import OrderRouter from './components/pages/order';
import { SharedModal } from './components/shared/ui/modal';
import PrivateRoute from './helper/routes/private-routes';
import { UserRole } from './types';

const App = (): JSX.Element => {
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
