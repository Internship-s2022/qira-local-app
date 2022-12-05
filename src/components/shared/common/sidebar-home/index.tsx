import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import { logout } from 'src/redux/auth/thunks';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch } from 'src/redux/store';

import styles from './sidebar-home.module.css';
import { propsSidebar } from './types';

const SidebarHome = (props: propsSidebar): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  if (!props.isOpen) {
    return <></>;
  }
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <div className={styles.sidebarTitle}>
          <p>Title</p>
        </div>
        <nav className={styles.navList}>
          <ul>
            <li>opcion 1</li>
            <li>opcion 2</li>
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

export default SidebarHome;
