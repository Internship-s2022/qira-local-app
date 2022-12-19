import Dinero from 'dinero.js';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { formatDate, formatOrderStateText } from 'src/helper/orders';

import styles from './order-card.module.css';
import { OrderCardProps } from './types';

const OrderCard = ({ order }: OrderCardProps): JSX.Element => {
  const navigate = useNavigate();

  const formattedDate = useMemo(() => {
    return formatDate(order.orderDate);
  }, [order.orderDate]);

  return (
    <div className={styles.orderCard} onClick={() => navigate(`/profile/my-orders/${order._id}`)}>
      <div className={styles.textContainer}>
        <p className={styles.dataText}>Pedido: </p>
        <p className={styles.orangeText}>{order._id}</p>
      </div>
      <p className={styles.priceText}>
        {Dinero({ amount: order?.amounts.total }).toFormat('$0,0.00')}
      </p>
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
