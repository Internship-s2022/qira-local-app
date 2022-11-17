import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import List from 'src/components/shared/ui/list';
import { Headers } from 'src/components/shared/ui/list/types';
import QiraLoader from 'src/components/shared/ui/qira-loader';
import { setFilterStateAction } from 'src/redux/orders/actions';
import { getOrdersFilteredByState } from 'src/redux/orders/selectors/getOrdersByState';
import { getOrders } from 'src/redux/orders/thunks';
import { AppDispatch, RootState } from 'src/redux/store';
import { OrderState } from 'src/types';

import styles from './orders.module.css';
import { FormattedOrder } from './types';

const Orders = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const isFetching = useSelector((state: RootState) => state.clients.isFetching);
  const filteredOrderList = useSelector((state: RootState) => getOrdersFilteredByState(state));

  const clickHandler = (param) => {
    dispatch(setFilterStateAction(param));
  };

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const headers: Headers[] = [
    { header: 'Fecha', key: 'orderDate' },
    { header: 'Cliente', key: 'client' },
    { header: 'Total', key: 'amounts' },
    { header: 'Estado', key: 'state' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Ordenes de compra</h1>
        <div className={styles.btnContainer}>
          <Button
            className={styles.btn}
            variant="contained"
            onClick={() => {
              clickHandler(OrderState.APPROVE_PENDING);
            }}
          >
            Pendiente de aprobación
          </Button>
          <Button
            className={styles.btn}
            variant="contained"
            onClick={() => {
              clickHandler(OrderState.DELIVERY_PENDING);
            }}
          >
            Pendiente de entrega
          </Button>
          <Button
            className={styles.btn}
            variant="contained"
            onClick={() => {
              clickHandler(OrderState.DELIVERED);
            }}
          >
            Entregada
          </Button>
          <Button
            className={styles.btn}
            variant="contained"
            onClick={() => {
              clickHandler(OrderState.REJECTED);
            }}
          >
            Rechazada
          </Button>
        </div>
      </div>
      {isFetching ? (
        <QiraLoader />
      ) : (
        <List<FormattedOrder> headers={headers} data={filteredOrderList}></List>
      )}
    </div>
  );
};

export default Orders;
