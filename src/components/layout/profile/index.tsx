import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { Footer, Header, SidebarHome } from 'src/components/shared/common';
import ShoppingCart from 'src/components/shared/ui/shopping-cart';
import { logout } from 'src/redux/auth/thunks';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './profile.module.css';

const ClientLayout = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const location = useLocation();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  return (
    <div className={isOpen ? styles.containerWithSidebar : ''}>
      <ShoppingCart />
      <Header />
      <SidebarHome isOpen={isOpen} />
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <section className={styles.profileNavBar}>
            <div className={styles.linksAndTittle}>
              <h1 className={styles.tittle}>Mi cuenta</h1>
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
                <p
                  onClick={() =>
                    dispatch(
                      openModal(ModalTypes.CONFIRM, {
                        message: '¿Está seguro de que desea cerrar sesión?',
                        onConfirmCallback: () => {
                          dispatch(logout());
                          dispatch(closeModal());
                        },
                        onCloseCallback: () => dispatch(closeModal()),
                      }),
                    )
                  }
                  className={styles.linkLogOut}
                >
                  Cerrar sesión
                </p>
              </nav>
            </div>
          </section>
          <div className={styles.outletContainer}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientLayout;
