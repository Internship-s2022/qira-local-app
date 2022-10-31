import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import PublicLayout from 'src/components/layout/public';
import { MainRoutes } from 'src/constants';

import Home from '../home';
import Storybook from '../storybook';
import { ProductsList } from './products';
import { SearchProductsList } from './search-results';

const ClientRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path={MainRoutes.STORYBOOK} element={<Storybook />} />
        <Route path={MainRoutes.CATEGORY} element={<ProductsList />} />
        <Route path={MainRoutes.SEARCH_RESULTS} element={<SearchProductsList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default ClientRouter;
