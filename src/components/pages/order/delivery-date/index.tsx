import { addBusinessDays, format, isValid } from 'date-fns';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@mui/material';

import DatePickerInput from 'src/components/shared/ui/date-picker';
import { setDeliveryDate } from 'src/redux/shopping-cart/actions';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './delivery.module.css';
import { DeliveryDateFormValues } from './types';
import { DeliveryDateValidations } from './validations';

const DeliveryDate = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const futureDate = addBusinessDays(new Date(), 5);
  const estimatedDeliveryDate = useSelector(
    (state: RootState) => state.shoppingCart.estimatedDeliveryDate,
  );

  const { handleSubmit, control, watch } = useForm<DeliveryDateFormValues>({
    defaultValues: {
      estimatedDeliveryDate: futureDate,
    },
    mode: 'onBlur',
    resolver: joiResolver(DeliveryDateValidations),
  });

  const onSubmit = async (data: DeliveryDateFormValues) => {
    const deliveryDateData = data.estimatedDeliveryDate;
    const formattedDate = format(deliveryDateData, 'MM/dd/yyyy');

    dispatch(setDeliveryDate(formattedDate));
  };

  const fechaInput = watch('estimatedDeliveryDate');

  const disableBtn = useMemo(() => {
    if (!isValid(fechaInput)) {
      return true;
    }
    const formattedFechaInput = format(fechaInput, 'MM/dd/yyyy');
    return estimatedDeliveryDate === formattedFechaInput;
  }, [estimatedDeliveryDate, fechaInput]);

  return (
    <section className={styles.container}>
      <h2>¿Cuándo retira la compra?</h2>
      <p className={styles.subTitle}>Por favor elija la fecha de retiro</p>
      <form className={styles.formContainer}>
        <DatePickerInput
          testId={'estimatedDeliveryDate'}
          name="estimatedDeliveryDate"
          control={control}
          minDate={futureDate}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          className={styles.button}
          onClick={handleSubmit(onSubmit)}
          disabled={disableBtn}
        >
          Aceptar
        </Button>
        <p>
          Recuerde que el pedido sólo podrá ser retirado a partir de los 5 días hábiles desde que
          realizó la compra.
        </p>
      </form>
    </section>
  );
};

export default DeliveryDate;
