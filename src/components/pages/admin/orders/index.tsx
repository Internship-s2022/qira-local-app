import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Article } from '@mui/icons-material';
import { Button } from '@mui/material';

import List from 'src/components/shared/ui/list';
import { Headers, TableButton } from 'src/components/shared/ui/list/types';
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
  const navigate = useNavigate();
  const isFetching = useSelector((state: RootState) => state.orders.isFetching);
  const filteredOrderList = useSelector((state: RootState) => getOrdersFilteredByState(state));
  const filterState = useSelector((state: RootState) => state.orders.filterState);

  const clickHandler = (param) => {
    if (param === filterState) {
      return dispatch(setFilterStateAction(undefined));
    }
    dispatch(setFilterStateAction(param));
  };

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const headers: Headers[] = [
    { header: 'Fecha de pago', key: 'orderDate' },
    { header: 'Fecha de aprobación', key: 'payAuthDate' },
    { header: 'Fecha de entrega', key: 'deliverDate' },
    { header: 'Cliente', key: 'client' },
    { header: 'Importe (ARS)', key: 'amounts' },
    { header: 'Estado', key: 'state' },
  ];

  const buttons: ((rowData: FormattedOrder) => TableButton)[] = [
    (rowData) => ({
      active: true,
      icon: <Article />,
      title: 'Detalles',
      onClick: () => {
        navigate(`/admin/order/${rowData.id}`);
      },
    }),
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Ordenes de compra</h1>
        <div className={styles.btnContainer}>
          <Button
            className={styles.btn}
            variant={filterState === 'APPROVE_PENDING' ? 'contained' : 'outlined'}
            onClick={() => {
              clickHandler(OrderState.APPROVE_PENDING);
            }}
          >
            Pendiente de aprobación
          </Button>
          <Button
            className={styles.btn}
            variant={filterState === 'DELIVERY_PENDING' ? 'contained' : 'outlined'}
            onClick={() => {
              clickHandler(OrderState.DELIVERY_PENDING);
            }}
          >
            Pendiente de entrega
          </Button>
          <Button
            className={styles.btn}
            variant={filterState === 'DELIVERED' ? 'contained' : 'outlined'}
            onClick={() => {
              clickHandler(OrderState.DELIVERED);
            }}
          >
            Entregada
          </Button>
          <Button
            className={styles.btn}
            variant={filterState === 'REJECTED' ? 'contained' : 'outlined'}
            onClick={() => {
              clickHandler(OrderState.REJECTED);
            }}
          >
            Rechazada
          </Button>
        </div>
      </div>
      {isFetching ? (
        <div className={styles.loaderContainer}>
          <QiraLoader />
        </div>
      ) : (
        <List<FormattedOrder>
          headers={headers}
          data={filteredOrderList}
          showButtons={true}
          buttons={buttons}
        />
      )}
    </div>
  );
};

export default Orders;
