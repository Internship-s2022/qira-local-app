import Dinero from 'dinero.js';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { InsertDriveFile } from '@mui/icons-material';

import QiraLoader from 'src/components/shared/ui/qira-loader';
import { formatIvaConditionsText } from 'src/helper/clients/clients';
import { formatOrderStateText } from 'src/helper/orders';
import { getClientOrderById } from 'src/redux/orders/thunks';
import { AppDispatch, RootState } from 'src/redux/store';
import { OrderState } from 'src/types';
import { capitalizeFirstLetter } from 'src/utils/formatters';

import styles from './order-details.module.css';

const OrderDetails = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();
  const isFetching = useSelector((state: RootState) => state.orders.isFetching);
  const selectedOrder = useSelector((state: RootState) => state.orders.selectedOrder);

  useEffect(() => {
    params.id && dispatch(getClientOrderById(params.id));
  }, []);

  return (
    <section className={styles.sectionContainer}>
      {isFetching ? (
        <div className={styles.loaderContainer}>
          <QiraLoader />
        </div>
      ) : (
        <div className={styles.columnsContainer}>
          <div className={styles.firstColumn}>
            <div className={styles.dataContainer}>
              <p className={styles.sectionTitle}>Datos del pedido</p>
              <div className={styles.dataCard}>
                <p className={styles.cardText}>Código del pedido</p>
                <p className={styles.orangeText}>{selectedOrder?._id}</p>
                <p className={styles.cardText}>Estado del pedido</p>
                <p className={styles.orangeText}>{formatOrderStateText(selectedOrder?.state)}</p>
              </div>
            </div>
            <div className={styles.dataContainer}>
              <p className={styles.sectionTitle}>Datos de facturación</p>
              <div className={styles.dataCard}>
                <p className={styles.cardText}>RAZÓN SOCIAL</p>
                <p className={styles.cardTitle}>{selectedOrder?.client.businessName}</p>
                <div>
                  <p className={styles.cardText}>
                    CUIT: {selectedOrder?.client.cuit} -{' '}
                    {formatIvaConditionsText(selectedOrder?.client.ivaCondition)}
                  </p>
                  <p className={styles.cardText}>
                    {capitalizeFirstLetter(selectedOrder?.client.address.street)} - CP:{' '}
                    {selectedOrder?.client.address?.zipCode}
                  </p>
                  <p className={styles.cardText}>
                    {capitalizeFirstLetter(selectedOrder?.client.address.city)} -{' '}
                    {capitalizeFirstLetter(selectedOrder?.client.address.province)}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.dataContainer}>
              <>
                <p className={styles.sectionTitle}>Autorizados a retirar</p>
                {selectedOrder?.authorized?.map((authorized, index) => (
                  <div key={index} className={styles.authDataCard}>
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
              <p className={styles.sectionTitle}>Dirección de retiro</p>
              <div className={styles.dataCard}>
                <p className={styles.cardTitle}>Qira Central Storage</p>
                <div>
                  <p className={styles.cardText}>Córdoba 1764 - CP: 2000</p>
                  <p className={styles.cardText}>Rosario - Santa Fe</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondColumn}>
            <p className={styles.sectionTitle}>Productos ({selectedOrder?.products.length})</p>
            <div className={styles.productsCard}>
              {selectedOrder?.products.map((cartProduct, index) => (
                <div className={styles.productRow} key={index}>
                  <div className={styles.imageContainer}>
                    <img className={styles.image} src={cartProduct.product.image.url} />
                    <p>{cartProduct.product.brand + ' ' + cartProduct.product.name}</p>
                  </div>
                  <div className={styles.quantity}>{cartProduct.quantity}</div>
                </div>
              ))}
            </div>
            <div className={styles.pricesContainer}>
              <div className={styles.priceDetails}>
                <div className={styles.productsPrice}>
                  <p>{'Productos (AR$)'}</p>
                  <p>
                    {Dinero({ amount: selectedOrder?.amounts.products || 0 }).toFormat('$0,0.00')}
                  </p>
                </div>
                <div className={styles.taxesPrice}>
                  <p>IVA</p>
                  <p>{Dinero({ amount: selectedOrder?.amounts.taxes || 0 }).toFormat('$0,0.00')}</p>
                </div>
              </div>
              <div className={styles.totalPrice}>
                <p>TOTAL</p>
                <p>{Dinero({ amount: selectedOrder?.amounts.total || 0 }).toFormat('$0,0.00')}</p>
              </div>
            </div>
            {selectedOrder?.state !== OrderState.REJECTED && (
              <div className={styles.dataContainer}>
                <div className={styles.filesContainer}>
                  {selectedOrder?.invoice?.url && (
                    <div className={styles.invoiceContainer}>
                      <a href={selectedOrder?.invoice?.url} target="blank" className={styles.link}>
                        <InsertDriveFile />
                        Factura
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderDetails;
