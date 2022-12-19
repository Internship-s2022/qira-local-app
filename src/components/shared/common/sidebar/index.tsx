import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { breadcrumbsClasses, Button } from '@mui/material';

import { logout } from 'src/redux/auth/thunks';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch } from 'src/redux/store';

import styles from './sidebar.module.css';
import { SidebarProps } from './types';

const Sidebar = (props: SidebarProps): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();

  const routeComparation = () => {
    switch (location.pathname) {
      case 'admin/orders':
        console.log('ruta:', location.pathname);
        return 'Ordenes de compra';
      case 'admin/clients':
        return 'Clientes';
      case 'admin/products':
        return 'Productos';
      case 'admin/categories':
        return 'Categorias';
      case '/admin/deliver':
        return 'Entregar pedido';
    }
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <div className={styles.sidebarTitle}>
          <p>{props.title}</p>
        </div>
        <nav className={styles.navList}>
          <ul>
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
                    <li className={routeComparation() === link.title ? styles.linkSelected : ''}>
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
