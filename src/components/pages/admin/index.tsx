import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AdminLayout from 'src/components/layout/admin';
import { AdminRoutes } from 'src/constants';

import Client from '../admin/client/';
import Categories from './categories';
import CategoryForm from './category';
import ClientsData from './clients';

const AdminRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path={AdminRoutes.ORDERS} element={<h1>Ordenes de compra</h1>} />
        <Route path={AdminRoutes.CLIENTS} element={<ClientsData />} />
        <Route path={AdminRoutes.CLIENT} element={<Client />} />
        <Route path={AdminRoutes.PRODUCTS} element={<h1>Productos</h1>} />
        <Route path={AdminRoutes.CATEGORIES} element={<Categories />} />
        <Route path={AdminRoutes.CATEGORY_CREATE} element={<CategoryForm />} />
        <Route path={AdminRoutes.CATEGORY_EDIT} element={<CategoryForm />} />
        <Route path={AdminRoutes.DELIVER} element={<h1>Entregar pedido</h1>} />
        <Route path="*" element={<Navigate to="orders" replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
