import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

import { Footer, Header } from 'src/components/shared/common';
import { logoutUser } from 'src/redux/auth/actions';
import { AppDispatch } from 'src/redux/store';

import styles from './profile.module.css';

const ClientLayout = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <section className={styles.profileNavBar}>
            <h1>Mi cuenta</h1>
            <nav className={styles.links}>
              <Link className={styles.link} to="/profile/my-orders">
                Mis pedidos
              </Link>
              <Link className={styles.link} to="/profile/bill-information">
                Datos de facturación
              </Link>
              <Link className={styles.link} to="/profile/user-data">
                Datos de usuario
              </Link>
              <p onClick={() => dispatch(logoutUser())} className={styles.linkLogOut}>
                Cerrar sesión
              </p>
            </nav>
          </section>
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
