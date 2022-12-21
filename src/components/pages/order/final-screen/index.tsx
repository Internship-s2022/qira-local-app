import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CancelOutlined, Close, ShoppingCartOutlined } from '@mui/icons-material';

import QiraLoader from 'src/components/shared/ui/qira-loader';
import { resetState } from 'src/redux/shopping-cart/actions';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './final-screen.module.css';

export const FinalScreen = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch: AppDispatch<null> = useDispatch();
  const isFetching = useSelector((state: RootState) => state.shoppingCart.isFetching);
  const error = useSelector((state: RootState) => state.shoppingCart.error);

  useEffect(() => {
    if (!isFetching) {
      setTimeout(() => {
        dispatch(resetState());
        navigate('/');
      }, 5000);
    }
  }, []);

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
            <Close className={styles.close} onClick={() => navigate('/')} />
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
