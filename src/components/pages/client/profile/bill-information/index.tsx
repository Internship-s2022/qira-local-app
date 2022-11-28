import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { InputText } from 'src/components/shared/ui/input';
import { RootState } from 'src/redux/store';

import styles from './bill-information.module.css';

const BillInformation = (): JSX.Element => {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const { control } = useForm({
    defaultValues: {
      businessName: currentUser?.businessName,
      ivaCondition: currentUser?.ivaCondition,
      cuit: currentUser?.cuit,
      province: currentUser?.address.province,
      city: currentUser?.address.city,
      zipCode: currentUser?.address.zipCode,
      street: currentUser?.address.street,
    },
    mode: 'onBlur',
  });

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.tittle}>Datos de Facturación</h2>
        <form className={styles.formContainer}>
          <div className={styles.columnContainer}>
            <InputText
              className={styles.input}
              control={control}
              name="businessName"
              type="text"
              optionalLabel="Razón Social"
              variant="outlined"
              margin="dense"
              size="small"
              disabled={true}
            />
            <InputText
              className={styles.input}
              control={control}
              name="ivaCondition"
              type="text"
              optionalLabel="Condición de IVA"
              variant="outlined"
              margin="dense"
              size="small"
              disabled={true}
            />
            <InputText
              className={styles.input}
              control={control}
              name="cuit"
              type="text"
              optionalLabel="CUIT"
              variant="outlined"
              margin="dense"
              size="small"
              disabled={true}
            />
            <InputText
              control={control}
              name="street"
              type="text"
              optionalLabel="Dirección"
              variant="outlined"
              margin="dense"
              size="small"
              disabled={true}
            />
          </div>
          <div>
            <InputText
              control={control}
              name="zipCode"
              type="text"
              optionalLabel="Código postal"
              variant="outlined"
              margin="dense"
              size="small"
              disabled={true}
            />
            <InputText
              control={control}
              name="city"
              type="text"
              optionalLabel="Localidad"
              variant="outlined"
              margin="dense"
              size="small"
              disabled={true}
            />
            <InputText
              control={control}
              name="province"
              type="text"
              optionalLabel="Provincia"
              variant="outlined"
              margin="dense"
              size="small"
              disabled={true}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default BillInformation;
