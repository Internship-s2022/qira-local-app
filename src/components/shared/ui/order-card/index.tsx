import { format } from 'date-fns';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { formatOrderStateText } from 'src/helper/orders';

import styles from './order-card.module.css';
import { OrderCardProps } from './types';

const OrderCard = ({ order }: OrderCardProps): JSX.Element => {
  const navigate = useNavigate();

  const orderDate = new Date(order.orderDate);

  const formattedDate = useMemo(() => {
    if (orderDate) {
      return format(orderDate, 'dd/MM/yyyy');
    }
  }, [orderDate]);

  return (
    <div className={styles.orderCard} onClick={() => navigate(`/profile/my-orders/${order._id}`)}>
      <div className={styles.textContainer}>
        <p className={styles.dataText}>Pedido: </p>
        <p className={styles.orangeText}>{order._id}</p>
      </div>
      <p className={styles.priceText}>{'AR$ ' + order.amounts.total.toFixed(2)}</p>
      <div className={styles.textContainer}>
        <p className={styles.dataText}>Estado: </p>
        <p className={styles.dataText}>{formatOrderStateText(order.state)}</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.dataText}>Fecha: </p>
        <p className={styles.dataText}>{formattedDate}</p>
      </div>
    </div>
  );
};

export default OrderCard;
