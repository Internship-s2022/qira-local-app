import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { Footer, Header } from 'src/components/shared/common';
import { logoutUser } from 'src/redux/auth/actions';
import { AppDispatch } from 'src/redux/store';

import styles from './profile.module.css';

const ClientLayout = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const location = useLocation();
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <section className={styles.profileNavBar}>
            <h1>Mi cuenta</h1>
            <nav className={styles.links}>
              <Link
                className={
                  location.pathname === '/profile/my-orders' ? styles.linkSelected : styles.link
                }
                to="/profile/my-orders"
              >
                Mis pedidos
              </Link>
              <Link
                className={
                  location.pathname === '/profile/bill-information'
                    ? styles.linkSelected
                    : styles.link
                }
                to="/profile/bill-information"
              >
                Datos de facturación
              </Link>
              <Link
                className={
                  location.pathname === '/profile/user-data' ? styles.linkSelected : styles.link
                }
                to="/profile/user-data"
              >
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
