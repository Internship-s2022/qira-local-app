import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import OrderCard from 'src/components/shared/ui/order-card';
import QiraLoader from 'src/components/shared/ui/qira-loader';
import { getClientOrders } from 'src/redux/orders/thunks';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './my-orders.module.css';

const MyOrders = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const isFetching = useSelector((state: RootState) => state.orders.isFetching);
  const clientOrders = useSelector((state: RootState) => state.orders.orders);
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const sortedList = clientOrders.sort(
    (a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime(),
  );

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
          {clientOrders.length >= 1 ? (
            <div className={styles.ordersContainer}>
              {sortedList.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))}
            </div>
          ) : (
            <div className={styles.noOrderMessage}>
              <p>
                {`Todavía no se ha creado ninguna órden asociada a ${currentUser.businessName}.
                Por favor, diríjase a
                la`}{' '}
                <Link to={'/'} className={styles.buttonHome}>
                  página principal
                </Link>{' '}
                {'para comenzar.'}
              </p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MyOrders;
