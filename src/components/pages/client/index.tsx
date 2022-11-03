import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import PublicLayout from 'src/components/layout/public';
import { ClientRoutes, MainRoutes } from 'src/constants';

import Home from '../home';
import Storybook from '../storybook';
import ClientProfile from './client-profile';
import { ProductDetail } from './product-detail';
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
        <Route path={ClientRoutes.CLIENT_PROFILE} element={<ClientProfile />} />
        <Route path={ClientRoutes.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default ClientRouter;
