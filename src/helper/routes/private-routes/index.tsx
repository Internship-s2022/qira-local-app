import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { RoutesProps } from './types';

const PrivateRoute = ({ redirectPath = '/', children, role }: RoutesProps): JSX.Element => {
  const token = sessionStorage.getItem('token');
  const userRole = sessionStorage.getItem('role');

  if (!token || !userRole) {
    return <Navigate to={redirectPath} replace />;
  }
  if (role && role !== userRole) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
