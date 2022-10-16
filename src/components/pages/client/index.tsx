import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import PublicLayout from 'src/components/layout/public';
import { MainRoutes } from 'src/constants';

import Home from '../home';
import Login from '../login';
import Storybook from '../storybook';

const ClientRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path={MainRoutes.LOGIN} element={<Login />} />
        <Route path={MainRoutes.STORYBOOK} element={<Storybook />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default ClientRouter;
