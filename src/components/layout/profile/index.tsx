import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Footer, Header } from 'src/components/shared/common';

import styles from './profile.module.css';

const ClientLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.profileContainer}>
            <section className={styles.profileNavBar}>
              <h1>Mi cuenta</h1>
              <nav className={styles.links}>
                <Link to="/profile/my-orders">Mis pedidos</Link>
                <Link to="/profile/bill-information">Datos de facturación</Link>
                <Link to="/profile/user-data">Datos de usuario</Link>
                <a href="">Cerrar sesión</a>
              </nav>
            </section>
          </div>
          <div className={styles.outletContainer}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClientLayout;
