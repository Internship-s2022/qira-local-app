import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ClientLayout from 'src/components/layout/profile';
import { ProfileClientRoutes } from 'src/constants';

import BillInformation from './bill-information';
import MyOrders from './my-orders';
import OrderDetails from './order-details';
import Password from './password';
import UserData from './user-data';

const ProfileRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path={ProfileClientRoutes.BILL_INFORMATION} element={<BillInformation />} />
        <Route path={ProfileClientRoutes.MY_ORDERS} element={<MyOrders />} />
        <Route path={ProfileClientRoutes.ORDER_DETAILS} element={<OrderDetails />} />
        <Route path={ProfileClientRoutes.USER_DATA} element={<UserData />} />
        <Route path={ProfileClientRoutes.PASSWORD} element={<Password />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default ProfileRouter;
