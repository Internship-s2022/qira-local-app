import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AdminLayout from 'src/components/layout/admin';
import { AdminRoutes } from 'src/constants';

import Categories from './categories';
import CategoryForm from './categories/form';
import Clients from './clients';

const AdminRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path={AdminRoutes.ORDERS} element={<h1>Ordenes de compra</h1>} />
        <Route path={AdminRoutes.CLIENTS} element={<Clients />} />
        <Route path={AdminRoutes.PRODUCTS} element={<h1>Productos</h1>} />
        <Route path={AdminRoutes.CATEGORY} element={<Categories />} />
        <Route path={AdminRoutes.CATEGORY_FORM} element={<CategoryForm />} />
        <Route path={AdminRoutes.DELIVER} element={<h1>Entregar pedido</h1>} />
        <Route path="*" element={<Navigate to="orders" replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
