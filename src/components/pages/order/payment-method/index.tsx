import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AccountBalanceOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

import { CustomFile } from 'src/components/shared/ui/modal/types';
import { toBase64 } from 'src/helper/form';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { addTransferReceipt, removeTransferReceipt } from 'src/redux/shopping-cart/actions';
import { AppDispatch, RootState } from 'src/redux/store';

import { FileToSend } from '../../admin/product/types';
import styles from './payment-method.module.css';

const PaymentMethod = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const receipt = useSelector((state: RootState) => state.shoppingCart?.receipt);

  useEffect(() => {
    return () => {
      dispatch(removeTransferReceipt());
    };
  }, []);

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
    dispatch(addTransferReceipt(fileToSend));
    dispatch(closeModal());
  };
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Método de pago</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.methodPaymentBox}>
          <p className={styles.titlePaymentMethod}>Medio de pago</p>
          <div className={styles.transferWithIcon}>
            <>
              <AccountBalanceOutlined />
              <p className={styles.titlePaymentMethod}>Transferencia Bancaria</p>
            </>
          </div>
        </div>
        <div className={styles.dataContainer}>
          <p className={styles.dataContainerTitle}>Datos para transferencia</p>
          <div className={styles.dataContent}>
            <div>
              <p className={styles.dataTitle}>BANCO HSBC</p>
              <p className={styles.dataInfo}>CUENTA CORRIENTE EN PESOS: 007133870</p>
            </div>
            <div>
              <p className={styles.dataTitle}>CBU:</p>
              <p className={styles.dataInfo}>1500021300008970698789</p>
            </div>
            <div>
              <p className={styles.dataTitle}>ALIAS:</p>
              <p className={styles.dataInfo}>ATUN.VALIJA.LISBOA</p>
            </div>
            <div>
              <p className={styles.dataTitle}>TITULAR:</p>
              <p className={styles.dataInfo}>Alz Mercados SA</p>
            </div>
            <div>
              <p className={styles.dataTitle}>CIUT:</p>
              <p className={styles.dataInfo}>27-24198768-9</p>
            </div>
            <div>
              <p className={styles.dataTitle}>EMAIL:</p>
              <p className={styles.dataInfo}>info@alz-agro.com</p>
            </div>
            <div>
              <p>
                <a className={styles.copyData} href="">
                  Copiar datos
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className={styles.info}>Por favor adjunte su comprobante de transferencia</p>
            {receipt && <p>{receipt.name}</p>}
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
              Cargar comprobante
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
