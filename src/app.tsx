import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SharedModal } from './components/shared/ui/modal';
import QiraLogo from './components/shared/ui/qira-loader';
import { tokenListener } from './helper/firebase';
import PrivateRoute from './helper/routes/private-routes';
import { UserRole } from './types';
const AdminRouter = lazy(() => import('./components/pages/admin'));
const ClientRouter = lazy(() => import('./components/pages/client'));
const ProfileRouter = lazy(() => import('./components/pages/client/profile'));
const OrderRouter = lazy(() => import('./components/pages/order'));

const App = (): JSX.Element => {
  useEffect(() => {
    tokenListener();
  }, []);

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="loaderContainer">
            <QiraLogo />
          </div>
        }
      >
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
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
