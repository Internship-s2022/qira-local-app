import { format, parse } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { formatIvaConditionsText } from 'src/helper/clients/clients';
import { RootState } from 'src/redux/store';
import { capitalizeFirstLetter } from 'src/utils/formatters';

import styles from './finish-order.module.css';

export const FinishOrder = (): JSX.Element => {
  const navigate = useNavigate();
  const client = useSelector((state: RootState) => state.auth.user);
  const shoppingCartProducts = useSelector((state: RootState) => state.shoppingCart.products);
  const authorized = useSelector((state: RootState) => state.shoppingCart.authorized);
  const estimatedDeliveryDate = useSelector(
    (state: RootState) => state.shoppingCart.estimatedDeliveryDate,
  );

  const parsedDate = parse(estimatedDeliveryDate, 'MM/dd/yyyy', new Date());
  const formattedDate = format(parsedDate, 'dd/MM/yyyy');

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
              <div>
                <p className={styles.cardText}>
                  CUIT: {client.cuit} - {formatIvaConditionsText(client.ivaCondition)}
                </p>
                <p className={styles.cardText}>
                  {capitalizeFirstLetter(client.address.street)} - CP: {client.address.zipCode}
                </p>
                <p className={styles.cardText}>
                  {capitalizeFirstLetter(client.address.city)} -{' '}
                  {capitalizeFirstLetter(client.address.province)}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.dataContainer}>
            <>
              <p className={styles.sectionTitle}>Autorizados a retirar</p>
              {authorized?.map((authorized, index) => (
                <div
                  key={index}
                  className={styles.clickableDataCard}
                  onClick={() => navigate('/order/authorized')}
                >
                  <p className={styles.cardTitle}>
                    {capitalizeFirstLetter(authorized.firstName) +
                      ' ' +
                      capitalizeFirstLetter(authorized.lastName)}
                  </p>
                  <div>
                    <p className={styles.cardText}>DNI: {authorized.dni}</p>
                    <p className={styles.cardText}>Teléfono: {authorized.phoneNumber}</p>
                  </div>
                </div>
              ))}
            </>
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.sectionTitle}>Dirección y fecha de retiro</p>
            <div className={styles.dataCard}>
              <p className={styles.cardTitle}>Qira Central Storage</p>
              <div>
                <p className={styles.cardText}>Córdoba 1764 - CP: 2000</p>
                <p className={styles.cardText}>Rosario - Santa Fe</p>
                <p className={styles.cardText}>Fecha: {formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondColumn}>
          <p className={styles.sectionTitle}>Productos ({shoppingCartProducts.length})</p>
          <div className={styles.productsCard} onClick={() => navigate('/order/summary')}>
            {shoppingCartProducts.map((cartProduct, index) => (
              <div className={styles.productRow} key={index}>
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={cartProduct.product.image.url} />
                  <p>{cartProduct.product.brand + ' ' + cartProduct.product.name}</p>
                </div>
                <div className={styles.quantity}>{cartProduct.quantity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
