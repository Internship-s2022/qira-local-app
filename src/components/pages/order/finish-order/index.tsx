import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from 'src/redux/store';
import { IvaCondition } from 'src/types';
import { capitalizeFirstLetter } from 'src/utils/formatters';

import styles from './finish-order.module.css';

export const FinishOrder = (): JSX.Element => {
  const navigate = useNavigate();
  const client = useSelector((state: RootState) => state.auth.user);
  const shoppingCartProducts = useSelector((state: RootState) => state.shoppingCart.products);

  const formatIvaConditionsText = () => {
    let ivaCondition: string;
    switch (client.ivaCondition) {
      case IvaCondition.exempt:
        ivaCondition = 'Exento';
        break;
      case IvaCondition.finalConsumer:
        ivaCondition = 'Consumidor final';
        break;
      case IvaCondition.registeredResponsible:
        ivaCondition = 'Responsable inscripto';
        break;
      case IvaCondition.selfEmployment:
        ivaCondition = 'Monotributista';
        break;
      default:
        break;
    }
    return ivaCondition;
  };

  return (
    <div className={styles.mainContainer}>
      <div>
        <h1>Finalizar compra</h1>
        <p className={styles.subtitle}>Revise y confirme su compra</p>
      </div>
      <div className={styles.columnsContainer}>
        <div className={styles.firstColumn}>
          <div className={styles.dataContainer}>
            <p className={styles.sectionTitle}>Datos de facturación</p>
            <div className={styles.dataCard}>
              <p className={styles.cardText}>RAZÓN SOCIAL</p>
              <p className={styles.cardTitle}>{client.businessName}</p>
              <p className={styles.cardText}>
                {client.cuit} - {formatIvaConditionsText()} -{' '}
                {capitalizeFirstLetter(client.address.street)} - {client.address.zipCode} -{' '}
                {capitalizeFirstLetter(client.address.city)} -{' '}
                {capitalizeFirstLetter(client.address.province)}
              </p>
            </div>
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.sectionTitle}>Autorizados a retirar</p>
            <div className={styles.clickableDataCard} onClick={() => navigate('/order/authorized')}>
              <p className={styles.cardTitle}>First Name Last Name</p>
              <p className={styles.cardText}>Dni - Teléfono</p>
            </div>
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.sectionTitle}>Dirección de retiro</p>
            <div className={styles.dataCard}>
              <p className={styles.cardTitle}>Qira Central Storage</p>
              <p className={styles.cardText}>Córdoba 1764 - CP 2000 - Rosario - Santa Fe</p>
            </div>
          </div>
        </div>
        <div className={styles.secondColumn}>
          <p className={styles.sectionTitle}>Productos ({shoppingCartProducts.length})</p>
          <div className={styles.productsCard} onClick={() => navigate('/order/summary')}>
            {shoppingCartProducts.map((cartProduct, index) => (
              <div className={styles.productRow} key={index}>
                <img className={styles.image} src={cartProduct.product.image.url} />
                <p>{cartProduct.product.brand + ' ' + cartProduct.product.name}</p>
                <div className={styles.quantity}>{cartProduct.quantity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
