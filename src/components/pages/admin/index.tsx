import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AdminLayout from 'src/components/layout/admin';
import { AdminRoutes } from 'src/constants';

const AdminRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path={AdminRoutes.ORDERS} element={<h1>Ordenes de compra</h1>} />
        <Route path={AdminRoutes.CLIENTS} element={<h1>Clientes</h1>} />
        <Route path={AdminRoutes.PRODUCTS} element={<h1>Productos</h1>} />
        <Route path={AdminRoutes.CATEGORY} element={<h1>Categorias</h1>} />
        <Route path={AdminRoutes.DELIVER} element={<h1>Entregar pedido</h1>} />
        <Route path="*" element={<Navigate to="orders" replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
