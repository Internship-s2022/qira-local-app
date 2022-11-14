import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { RootState } from 'src/redux/store';

import { RoutesProps } from './types';

const PrivateRoute = ({ redirectPath = '/', children, role }: RoutesProps): JSX.Element => {
  const token = useSelector((state: RootState) => state.auth.token);
  const userRole = useSelector((state: RootState) => state.auth.role);

  if (!token || !userRole) {
    return <Navigate to={redirectPath} replace />;
  }
  if (role && role !== userRole) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
