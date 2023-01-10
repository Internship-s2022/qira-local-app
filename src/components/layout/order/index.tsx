import Dinero from 'dinero.js';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { OrderRoutes } from 'src/constants';
import { getExchangeRate } from 'src/redux/exchange-rate/thunks';
import { getOrderAmounts } from 'src/redux/shopping-cart/selectors/getOrderAmounts';
import { createOrder } from 'src/redux/shopping-cart/thunks';
import { OrderToCreate } from 'src/redux/shopping-cart/types';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './order.module.css';

const OrderLayout = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const dollarRate = useSelector((state: RootState) => state.exchangeRate?.exchangeRate?.value);
  const clientId = useSelector((state: RootState) => state.auth.user._id);
  const cartProducts = useSelector((state: RootState) => state.shoppingCart.products);
  const authorized = useSelector((state: RootState) => state.shoppingCart.authorized);
  const payReceipt = useSelector((state: RootState) => state.shoppingCart.receipt);
  const estimatedDeliveryDate = useSelector(
    (state: RootState) => state.shoppingCart.estimatedDeliveryDate,
  );
  const orderAmounts = useSelector((state: RootState) => getOrderAmounts(state));
  const location = useLocation();
  const navigate = useNavigate();

  let btnOptions: {
    text: string;
    onClick: () => void;
    disabled: boolean;
  };

  useEffect(() => {
    dispatch(getExchangeRate());
  }, []);

  const handleCreateOrder = () => {
    const order: OrderToCreate = {
      products: cartProducts,
      client: clientId,
      authorized: authorized,
      amounts: orderAmounts,
      payment: payReceipt,
      exchangeRate: parseFloat(dollarRate),
      estimatedDeliveryDate: estimatedDeliveryDate,
    };
    dispatch(createOrder(order));
    navigate(`/order${OrderRoutes.FINAL_SCREEN}`);
  };

  switch (location.pathname) {
    case `/order${OrderRoutes.SUMMARY}`:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(`/order${OrderRoutes.AUTHORIZED}`),
        disabled: cartProducts.length > 0 ? false : true,
      };
      if (cartProducts.length === 0) {
        setTimeout(() => navigate('/'), 1000);
      }
      break;
    case `/order${OrderRoutes.AUTHORIZED}`:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(`/order${OrderRoutes.DELIVERY_DATE}`),
        disabled: authorized.length > 0 ? false : true,
      };
      break;
    case `/order${OrderRoutes.DELIVERY_DATE}`:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(`/order${OrderRoutes.FINISH_ORDER}`),
        disabled: estimatedDeliveryDate ? false : true,
      };
      break;
    case `/order${OrderRoutes.FINISH_ORDER}`:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(`/order${OrderRoutes.PAYMENT_METHOD}`),
        disabled: authorized.length > 0 ? false : true,
      };
      break;
    case `/order${OrderRoutes.PAYMENT_METHOD}`:
      btnOptions = {
        text: 'Finalizar compra',
        onClick: () => handleCreateOrder(),
        disabled: payReceipt ? false : true,
      };
      break;
    default:
      break;
  }

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
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
        <div className={styles.pricesSidebar}>
          <div className={styles.sidebarContent}>
            <h1 className={styles.title}>Resumen</h1>
            <div className={styles.priceDetails}>
              <div className={styles.productsPrice}>
                <p>{'Productos (AR$)'}</p>
                <p>{Dinero({ amount: orderAmounts.products }).toFormat('$0,0.00')}</p>
              </div>
              <div className={styles.taxesPrice}>
                <p>IVA</p>
                <p>{Dinero({ amount: orderAmounts.taxes }).toFormat('$0,0.00')}</p>
              </div>
            </div>
            <div className={styles.totalPrice}>
              <p>TOTAL</p>
              <p>{Dinero({ amount: orderAmounts.total }).toFormat('$0,0.00')}</p>
            </div>
            <Button
              size="large"
              className={styles.button}
              onClick={btnOptions.onClick}
              disabled={btnOptions.disabled || !dollarRate}
            >
              {btnOptions.text}
            </Button>
          </div>
        </div>
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

export default OrderLayout;
