import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';

import { logout } from 'src/redux/auth/thunks';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { resetState } from 'src/redux/shopping-cart/actions';
import { AppDispatch } from 'src/redux/store';

import styles from './sidebar.module.css';
import { SidebarProps } from './types';

const Sidebar = (props: SidebarProps): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const location = useLocation();

  const routeComparation = () => {
    switch (location.pathname) {
      case '/admin/orders':
        return 'Ordenes de compra';
      case '/admin/clients':
        return 'Clientes';
      case '/admin/products':
        return 'Productos';
      case '/admin/categories':
        return 'Categorias';
      case '/admin/deliver':
        return 'Entregar pedido';
      default:
        return '';
    }
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <div className={styles.sidebarTitle}>
          <p>{props.title}</p>
        </div>
        <nav className={styles.navList}>
          <ul className={styles.list}>
            {props.links.map((link, index) => {
              return (
                <NavLink
                  to={link.title === 'Volver a QIRA' ? link.link : props.baseUrl + link.link}
                  key={index}
                >
                  {link.title === 'Volver a QIRA' ? (
                    <li className={styles.arrowTab}>
                      <ArrowBack className={styles.iconArrow} />
                      {link.title}
                    </li>
                  ) : (
                    <li
                      className={routeComparation().includes(link.title) ? styles.linkSelected : ''}
                    >
                      {link.title}
                    </li>
                  )}
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.sidebarFooter}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() =>
            dispatch(
              openModal(ModalTypes.CONFIRM, {
                message: '¿Está seguro de que desea cerrar sesión?',
                onConfirmCallback: () => {
                  dispatch(logout());
                  dispatch(resetState());
                  dispatch(closeModal());
                },
                onCloseCallback: () => dispatch(closeModal()),
              }),
            )
          }
        >
          Cerrar sesión
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
