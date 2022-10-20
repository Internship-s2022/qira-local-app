import React from 'react';
import { Outlet } from 'react-router-dom';

import { SidebarLinks } from 'src/components/shared/common/sidebar/types';

import Sidebar from '../../shared/common/sidebar';
import styles from './admin.module.css';

const AdminLayout = (): JSX.Element => {
  const baseUrl = '/admin';
  const adminLinks: SidebarLinks[] = [
    { link: '/', title: 'Inicio' },
    { link: '/orders', title: 'Ordenes de compra' },
    { link: '/clients', title: 'Clientes' },
    { link: '/products', title: 'Productos' },
    { link: '/categories', title: 'Categorias' },
    { link: '/deliver', title: 'Entregar pedido' },
  ];
  const title = 'APP WEB Administrador';
  const bottomText = 'Admin';

  return (
    <div className={styles.mainContainer}>
      <Sidebar baseUrl={baseUrl} links={adminLinks} title={title} bottomText={bottomText} />
      <div className={styles.contentContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
