import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@mui/material';

import { InputText } from 'src/components/shared/ui/input';

import styles from './authorized.module.css';
import { FormValues } from './types';
import { AuthorizedValidations } from './validations';

const Authorized = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      dni: '',
      phoneNumber: '',
    },
    mode: 'onBlur',
    resolver: joiResolver(AuthorizedValidations),
  });

  const onSubmit = async (data: FormValues) => {
    const submitData = {
      firstName: data.firstName,
      lastName: data.lastName,
      dni: data.dni,
      phoneNumber: data.phoneNumber,
    };
    console.log(submitData);
  };

  return (
    <section className={styles.container}>
      <h2>¿Quién retira o recibe la compra?</h2>
      <p className={styles.subTitle}>Puede elegir uno o más autorizados</p>
      <form>
        <h4>Autorizados a retirar</h4>
        <div className={styles.columnContainer}>
          <div className={styles.column}>
            <InputText
              control={control}
              name="firstName"
              type="text"
              optionalLabel="Nombre *"
              variant="outlined"
              margin="dense"
              size="small"
            />
            <InputText
              control={control}
              name="dni"
              type="text"
              optionalLabel="DNI *"
              variant="outlined"
              margin="dense"
              size="small"
            />
          </div>
          <div className={styles.column}>
            <InputText
              control={control}
              name="lastName"
              type="text"
              optionalLabel="Apellido *"
              variant="outlined"
              margin="dense"
              size="small"
            />
            <InputText
              control={control}
              name="phoneNumber"
              type="text"
              optionalLabel="Telefono *"
              variant="outlined"
              margin="dense"
              size="small"
            />
          </div>
        </div>
        <Button
          color="primary"
          variant="contained"
          className={styles.button}
          onClick={handleSubmit(onSubmit)}
        >
          Agregar autorizado
        </Button>
      </form>
    </section>
  );
};

export default Authorized;
