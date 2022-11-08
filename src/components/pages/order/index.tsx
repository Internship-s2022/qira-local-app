import React from 'react';
import { Route, Routes } from 'react-router-dom';

import OrderLayout from 'src/components/layout/order';
import { OrderRoutes } from 'src/constants';

const OrderRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<OrderLayout />}>
        <Route path={OrderRoutes.SUMMARY} element={<h1>Carrito de compras</h1>} />
        <Route path={OrderRoutes.AUTHORIZED} element={<h1>¿Quién retira la compra?</h1>} />
        <Route path={OrderRoutes.FINISH_ORDER} element={<h1>Finalizar compra</h1>} />
        <Route path={OrderRoutes.PAYMENT_METHOD} element={<h1>Método de pago</h1>} />
      </Route>
    </Routes>
  );
};

export default OrderRouter;
