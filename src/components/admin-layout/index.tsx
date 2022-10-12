import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../shared/common/sidebar';
import styles from './admin-layout.module.css';

const AdminLayout = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
