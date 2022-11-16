import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import List from 'src/components/shared/ui/list';
import { Headers, TableButton } from 'src/components/shared/ui/list/types';
import { getOrders } from 'src/redux/orders/thunks';
import { AppDispatch, RootState } from 'src/redux/store';
import { OrderState } from 'src/types';

import styles from './orders.module.css';

const Ordenes = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const isFetching = useSelector((state: RootState) => state.clients.isFetching);
  const orders = useSelector((state: RootState) => state.orders.orders);
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const formatData = (data) => {
    const listData = data.map((order) => {
      let stateSwitch;
      switch (order.state) {
        case OrderState.APPROVE_PENDING:
          stateSwitch = 'Pendiente de aprobación';
          break;
        case OrderState.DELIVERY_PENDING:
          stateSwitch = 'Pendiente de entrega';
          break;
        case OrderState.DELIVERED:
          stateSwitch = 'Entregado';
          break;
        case OrderState.REJECTED:
          stateSwitch = 'Rechazado';
          break;
      }
      return {
        _id: order._id,
        client: order.client.businessName,
        orderDate: order.orderDate.split('T').at(0),
        amounts: order.amounts.total,
        state: stateSwitch,
      };
    });
    return listData;
  };

  const headers: Headers[] = [
    { header: 'Fecha', key: 'orderDate' },
    { header: 'Cliente', key: 'client' },
    { header: 'Total', key: 'amounts' },
    { header: 'Estado', key: 'state' },
  ];

  console.log(orders);
  console.log(products);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Ordenes de compra</h1>
        <div className={styles.btnContainer}>
          <Button className={styles.btn} variant="contained">
            Pendiente de aprobación
          </Button>
          <Button className={styles.btn} variant="contained">
            Pendiente de entrega
          </Button>
          <Button className={styles.btn} variant="contained">
            Entregado
          </Button>
          <Button className={styles.btn} variant="contained">
            Rechazado
          </Button>
        </div>
      </div>
      {isFetching ? (
        <></>
      ) : (
        <List<any>
          headers={headers}
          data={formatData(orders)}
          // showButtons={true}
          // buttons={buttons}
        ></List>
      )}
    </div>
  );
};

export default Ordenes;
