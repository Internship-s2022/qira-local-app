import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CancelOutlined, ShoppingCartOutlined } from '@mui/icons-material';

import QiraLoader from 'src/components/shared/ui/qira-loader';
import { RootState } from 'src/redux/store';

import styles from './final-screen.module.css';

export const FinalScreen = (): JSX.Element => {
  const isFetching = useSelector((state: RootState) => state.orders.isFetching);
  const error = useSelector((state: RootState) => state.orders.error);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <Link to="/">
          <img
            className={styles.logoQira}
            src={`${process.env.PUBLIC_URL}/assets/images/logo-qira.svg`}
            alt=""
          />
        </Link>
      </div>
      <div className={styles.contentContainer}>
        {isFetching ? (
          <QiraLoader />
        ) : (
          <div className={styles.infoContainer}>
            {error ? (
              <>
                <CancelOutlined className={styles.cartLogo} />
                <h2 className={styles.title}>Ha ocurrido un error</h2>
                <p className={styles.message}>Intente de nuevo en unos minutos.</p>
              </>
            ) : (
              <>
                <ShoppingCartOutlined className={styles.cartLogo} />
                <h2 className={styles.title}>¡Muchas gracias por su pedido!</h2>
                <p className={styles.message}>
                  Su orden ha sido creada y está pendiente de aprobación. Puede visualizar el
                  resumen de la compra desde su perfil.
                </p>
              </>
            )}
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logoQira}
            src={`${process.env.PUBLIC_URL}/assets/images/logo-qira.svg`}
          />
          <span className={styles.license}>© 2022 QIRA. Todos los derechos reservados.</span>
        </div>
      </div>
    </div>
  );
};
