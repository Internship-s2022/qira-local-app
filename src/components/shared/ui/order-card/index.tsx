import React from 'react';
import { useNavigate } from 'react-router-dom';

import { formatOrderStateText } from 'src/helper/orders';

import styles from './order-card.module.css';
import { OrderCardProps } from './types';

const OrderCard = ({ order }: OrderCardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.orderCard}>
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
        <p className={styles.dataText}>{order.orderDate.toString().split('T').at(0)}</p>
      </div>
    </div>
  );
};

export default OrderCard;
