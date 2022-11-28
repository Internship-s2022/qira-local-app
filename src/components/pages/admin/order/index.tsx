import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { InsertDriveFile } from '@mui/icons-material';
import { Button } from '@mui/material';

import { Loader } from 'src/components/shared/ui/loader';
import { CustomFile } from 'src/components/shared/ui/modal/types';
import QiraLoader from 'src/components/shared/ui/qira-loader';
import { formatIvaConditionsText } from 'src/helper/clients/clients';
import { toBase64 } from 'src/helper/form';
import { formatOrderStateText } from 'src/helper/orders';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes, Options } from 'src/redux/modal/types';
import { resetSelectedOrder } from 'src/redux/orders/actions';
import { approveOrder, deliverOrder, getOrderById, rejectOrder } from 'src/redux/orders/thunks';
import { Actions } from 'src/redux/orders/types';
import { AppDispatch, RootState } from 'src/redux/store';
import { FileToSend, OrderState } from 'src/types';
import { capitalizeFirstLetter } from 'src/utils/formatters';

import styles from './order.module.css';

const OrderDetails = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();
  const isFetching = useSelector((state: RootState) => state.orders.isFetching);
  const isFetchingOrder = useSelector((state: RootState) => state.orders.isFetchingOrder);
  const selectedOrder = useSelector((state: RootState) => state.orders.selectedOrder);
  const [invoice, setInvoice] = useState<FileToSend>(null);

  useEffect(() => {
    params.id && dispatch(getOrderById(params.id));
    // return () => {
    //   dispatch(resetSelectedOrder());
    // };
  }, []);

  // useEffect(() => {
  //   dispatch(getOrderById(params.id));
  // }, [selectedOrder?.state]);

  const onUpload = async (selectedFile: CustomFile) => {
    const fileBase64: any = await toBase64(selectedFile);
    let fileToSend: FileToSend;
    if (fileBase64) {
      fileToSend = {
        base64: fileBase64,
        name: selectedFile.name,
        type: selectedFile.type,
        isNew: true,
      };
    }
    setInvoice(fileToSend);
    dispatch(closeModal());
  };

  const handleApprove = async () => {
    const submitData = {
      invoice: invoice,
    };
    const modalOptions: Options = {};
    if (params.id) {
      const response = await dispatch(approveOrder(selectedOrder?._id, submitData));
      if (response?.type === Actions.APPROVE_ORDER_ERROR) {
        modalOptions.message = 'Ha ocurrido un error';
        modalOptions.onCloseCallback = () => {
          dispatch(closeModal());
        };
        dispatch(openModal(ModalTypes.INFO, modalOptions));
      }
    }
  };

  const handleDeliver = async () => {
    const submitData = {
      signedInvoice: invoice,
    };
    const modalOptions: Options = {};
    if (params.id) {
      const response = await dispatch(deliverOrder(selectedOrder?._id, submitData));
      if (response?.type === Actions.DELIVER_ORDER_ERROR) {
        modalOptions.message = 'Ha ocurrido un error';
        modalOptions.onCloseCallback = () => {
          dispatch(closeModal());
        };
        dispatch(openModal(ModalTypes.INFO, modalOptions));
      }
    }
  };

  const handleReject = async () => {
    const modalOptions: Options = {};
    if (params.id) {
      const response = await dispatch(rejectOrder(selectedOrder?._id));
      if (response?.type === Actions.REJECT_ORDER_ERROR) {
        modalOptions.message = 'Ha ocurrido un error';
        modalOptions.onCloseCallback = () => {
          dispatch(closeModal());
        };
        dispatch(openModal(ModalTypes.INFO, modalOptions));
      }
    }
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <h1>Detalle de la orden</h1>
      </div>
      {isFetching ? (
        <div className={styles.loaderContainer}>
          <QiraLoader />
        </div>
      ) : (
        <div className={styles.detailsContainer}>
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
                      {selectedOrder?.client.address.zipCode}
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
                    <p>{'AR$ ' + selectedOrder?.amounts.products.toFixed(2)}</p>
                  </div>
                  <div className={styles.taxesPrice}>
                    <p>IVA</p>
                    <p>{'AR$ ' + selectedOrder?.amounts.taxes.toFixed(2)}</p>
                  </div>
                </div>
                <div className={styles.totalPrice}>
                  <p>TOTAL</p>
                  <p>{'AR$ ' + selectedOrder?.amounts.total.toFixed(2)}</p>
                </div>
              </div>
              {selectedOrder?.state === OrderState.REJECTED ? (
                <></>
              ) : (
                <div className={styles.dataContainer}>
                  <div>
                    <a href={selectedOrder?.payment.url} target="blank" className={styles.link}>
                      <InsertDriveFile />
                      Comprobante de pago
                    </a>
                  </div>
                  <div className={styles.filesContainer}>
                    {selectedOrder?.state === OrderState.DELIVERY_PENDING &&
                      selectedOrder?.invoice?.url && (
                        <div className={styles.invoiceContainer}>
                          <a
                            href={selectedOrder?.invoice?.url}
                            target="blank"
                            className={styles.link}
                          >
                            <InsertDriveFile />
                            Factura
                          </a>
                        </div>
                      )}
                    {selectedOrder?.state === OrderState.DELIVERED &&
                      selectedOrder?.signedInvoice?.url && (
                        <>
                          <div className={styles.invoiceContainer}>
                            <a
                              href={selectedOrder?.invoice?.url}
                              target="blank"
                              className={styles.link}
                            >
                              <InsertDriveFile />
                              Factura
                            </a>
                          </div>
                          <div className={styles.invoiceContainer}>
                            <a
                              href={selectedOrder?.invoice?.url}
                              target="blank"
                              className={styles.link}
                            >
                              <InsertDriveFile />
                              Factura firmada
                            </a>
                          </div>
                        </>
                      )}
                    {selectedOrder?.state === OrderState.DELIVERED ? (
                      <></>
                    ) : (
                      <>
                        {invoice && (
                          <div>
                            <p className={styles.sectionTitle}>
                              {selectedOrder?.state === OrderState.APPROVE_PENDING
                                ? 'Factura:'
                                : 'Factura firmada:'}
                            </p>
                            <p>{invoice.name}</p>
                          </div>
                        )}
                        <Button
                          onClick={() =>
                            dispatch(
                              openModal(ModalTypes.UPLOAD_PDF, {
                                onConfirmCallback: (selectedFile) => {
                                  onUpload(selectedFile);
                                },
                                onCloseCallback: () => dispatch(closeModal),
                              }),
                            )
                          }
                          color="primary"
                          variant="contained"
                          className={styles.btnUpload}
                        >
                          {invoice
                            ? 'Modificar factura'
                            : selectedOrder?.state === OrderState.DELIVERY_PENDING
                            ? 'Cargar factura firmada'
                            : 'Cargar factura'}
                        </Button>
                      </>
                    )}
                  </div>
                  {selectedOrder?.state === OrderState.APPROVE_PENDING ? (
                    <div className={styles.btnsContainer}>
                      {isFetchingOrder ? (
                        <div className={styles.btnsLoaderContainer}>
                          <Loader />
                        </div>
                      ) : (
                        <>
                          <Button
                            variant="contained"
                            color="primary"
                            disabled={invoice ? false : true}
                            onClick={handleApprove}
                          >
                            Aprobar Pago
                          </Button>
                          <Button variant="outlined" color="primary" onClick={handleReject}>
                            Rechazar Pago
                          </Button>
                        </>
                      )}
                    </div>
                  ) : (
                    selectedOrder?.state === OrderState.DELIVERY_PENDING && (
                      <div className={styles.btnsContainer}>
                        {isFetchingOrder ? (
                          <div className={styles.btnsLoaderContainer}>
                            <Loader />
                          </div>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            disabled={invoice ? false : true}
                            onClick={handleDeliver}
                          >
                            Entregar Pedido
                          </Button>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderDetails;
