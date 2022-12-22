import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OrderCard from 'src/components/shared/ui/order-card';
import QiraLoader from 'src/components/shared/ui/qira-loader';
import { getClientOrders } from 'src/redux/orders/thunks';
import { Order } from 'src/redux/orders/types';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './my-orders.module.css';

const MyOrders = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const isFetching = useSelector((state: RootState) => state.orders.isFetching);
  const clientOrders = useSelector((state: RootState) => state.orders.orders);
  const [sortedList, setSortedList] = useState<Order[]>([]);

  useMemo(() => {
    setSortedList(
      clientOrders.sort(
        (a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime(),
      ),
    );
  }, [clientOrders]);

  useEffect(() => {
    dispatch(getClientOrders());
  }, []);

  return (
    <section className={styles.mainContainer}>
      {isFetching ? (
        <div className={styles.loaderContainer}>
          <QiraLoader />
        </div>
      ) : (
        <>
          <h1 className={styles.title}>Pedidos realizados</h1>
          <div className={styles.ordersContainer}>
            {sortedList.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default MyOrders;
