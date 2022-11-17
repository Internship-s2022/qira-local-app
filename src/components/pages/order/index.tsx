import React from 'react';
import { Route, Routes } from 'react-router-dom';

import OrderLayout from 'src/components/layout/order';
import { OrderRoutes } from 'src/constants';

import Authorized from './authorized';
import { FinalScreen } from './final-screen';
import { FinishOrder } from './finish-order';
import OrderSummary from './order-summary';
import PaymentMethod from './payment-method';

const OrderRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<OrderLayout />}>
        <Route path={OrderRoutes.SUMMARY} element={<OrderSummary />} />
        <Route path={OrderRoutes.AUTHORIZED} element={<Authorized />} />
        <Route path={OrderRoutes.FINISH_ORDER} element={<FinishOrder />} />
        <Route path={OrderRoutes.PAYMENT_METHOD} element={<PaymentMethod />} />
      </Route>
      <Route path={OrderRoutes.FINAL_SCREEN} element={<FinalScreen />} />
    </Routes>
  );
};

export default OrderRouter;
