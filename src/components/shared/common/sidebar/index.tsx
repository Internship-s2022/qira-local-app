import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './sidebar.module.css';

const Sidebar = (): JSX.Element => {
  const adminLinks = [
    { link: '/admin', title: 'Inicio' },
    { link: '/admin/orders', title: 'Ordenes de compra' },
    { link: '/admin/clients', title: 'Clientes' },
    { link: '/admin/products', title: 'Productos' },
    { link: '/admin/categories', title: 'Categorias' },
    { link: '/admin/deliver', title: 'Entregar pedido' },
  ];

  return (
    <aside className={styles.aside}>
      <div className={styles.sidebarTitle}>
        <p>APP WEB Administrador</p>
      </div>
      <nav>
        <ul className={styles.navList}>
          {adminLinks.map((link, index) => {
            return (
              <NavLink to={link.link} key={index}>
                <li>{link.title}</li>
              </NavLink>
            );
          })}
        </ul>
      </nav>
      <div className={styles.sidebarTitle}>
        <p>Admin</p>
      </div>
    </aside>
  );
};

export default Sidebar;
