import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@mui/material';

import { InputText } from 'src/components/shared/ui/input';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { getOrderToDeliver } from 'src/redux/orders/thunks';
import { Actions } from 'src/redux/orders/types';
import { AppDispatch } from 'src/redux/store';

import styles from './deliver.module.css';
import { DeliverFormValues } from './types';
import { DeliverValidations } from './validations';

const DeliverOrders = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<DeliverFormValues>({
    defaultValues: {
      id: '',
      dni: '',
    },
    mode: 'onBlur',
    resolver: joiResolver(DeliverValidations),
  });

  const onSubmit = async (data: DeliverFormValues) => {
    const submitData = {
      id: data.id,
      dni: data.dni,
    };
    const response = await dispatch(getOrderToDeliver(submitData));
    if (response?.type === Actions.GET_ORDER_TO_DELIVER_SUCCESS) {
      navigate(`/admin/order/${data.id}`);
    } else {
      switch (response.payload.message) {
        case `Could not find an order by the id of ${data.id}.`:
          dispatch(
            openModal(ModalTypes.INFO, {
              message: 'No se encontró una órden pendiente de entrega con ese código.',
            }),
          );
          break;
        case `The order with the id ${data.id} is already delivered.`:
          dispatch(
            openModal(ModalTypes.INFO, { message: 'La órden con ese código ya fue entregada.' }),
          );
          break;
        case `Could not find an authorized with the dni ${data.dni}.`:
          dispatch(
            openModal(ModalTypes.INFO, { message: 'No se encontró un autorizado con ese DNI.' }),
          );
          break;
        default:
          dispatch(openModal(ModalTypes.INFO, { message: 'Ha ocurrido un error.' }));
          break;
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Entregar pedido</h1>
      </div>
      <form className={styles.formContainer}>
        <div className={styles.formTitleContainer}>
          <p className={styles.formTitle}>Datos del pedido</p>
        </div>
        <div className={styles.inputsContainer}>
          <InputText
            control={control}
            name="id"
            type="text"
            optionalLabel="Código de pedido *"
            variant="outlined"
            margin="dense"
            size="small"
          />
          <InputText
            control={control}
            name="dni"
            type="text"
            optionalLabel="DNI del autorizado *"
            variant="outlined"
            margin="dense"
            size="small"
          />
          <Button
            className={styles.button}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            Continuar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DeliverOrders;
