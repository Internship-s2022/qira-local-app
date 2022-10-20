import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { joiResolver } from '@hookform/resolvers/joi';
import { LockOutlined, MailOutlineOutlined, PhoneOutlined } from '@mui/icons-material';
import { Button, InputAdornment } from '@mui/material';
import { style } from '@mui/system';

import { InputText } from 'src/components/shared/ui/input';
import { SharedSelect } from 'src/components/shared/ui/select';
import { Options } from 'src/components/shared/ui/select/types';
import { AppDispatch } from 'src/redux/store';
import { IvaCondition } from 'src/types';

import styles from './client.module.css';
import { UpdateClientValues } from './types';
import { updateClientValidations } from './validations';

const Client = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();
  console.log(params.id);
  const { handleSubmit, control, reset } = useForm<UpdateClientValues>({
    defaultValues: {
      email: '',
      codeArea: '',
      phoneNumber: '',
      businessName: '',
      cuit: '',
      ivaCondition: '',
      province: '',
      city: '',
      zipCode: '',
      street: '',
    },
    mode: 'onSubmit',
    resolver: joiResolver(updateClientValidations),
  });
  const IvaConditionOptions: Options[] = [
    { label: 'Responsable Inscripto', value: IvaCondition.registeredResponsible },
    { label: 'Exento', value: IvaCondition.exempt },
    { label: 'Consumidor Final', value: IvaCondition.finalConsumer },
    { label: 'Monotributista', value: IvaCondition.selfEmployment },
  ];

  const formatSubmitData = (data) => {
    const formattedUser = {
      businessName: data.businessName,
      cuit: data.cuit,
      ivaCondition: data.ivaCondition,
      address: {
        province: data.province,
        city: data.city,
        zipCode: data.zipCode,
        street: data.street,
      },
      phoneNumber: data.codeArea + data.phoneNumber,
      email: data.email,
      isActive: true,
      logicDelete: false,
    };
    return formattedUser;
  };

  const submitHandler = (data) => {
    const formattedUser = formatSubmitData(data);
    // dispatch(register(formattedUser));
    // props.onConfirm();
    reset();
  };

  return (
    <form className={styles.container}>
      <h2 className={styles.title}>Datos del cliente</h2>
      <div className={styles.formContainer}>
        <div className={styles.columnContainer}>
          <InputText
            control={control}
            name="businessName"
            type="text"
            optionalLabel="Razón Social"
            variant="outlined"
            margin="dense"
            size="small"
          />
          <InputText
            control={control}
            name="cuit"
            type="text"
            optionalLabel="CUIT"
            variant="outlined"
            margin="dense"
            size="small"
          />
          <SharedSelect
            control={control}
            name="ivaCondition"
            // optionalLabel="Condición de IVA"
            margin="dense"
            size="small"
            options={IvaConditionOptions}
          />
          <InputText
            control={control}
            name="email"
            optionalLabel="Email"
            variant="outlined"
            margin="dense"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineOutlined color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <div className={styles.phoneInputs}>
            <InputText
              className={styles.shortInput}
              control={control}
              name="codeArea"
              type="text"
              optionalLabel="Cod. área"
              variant="outlined"
              margin="dense"
              size="small"
            />
            <InputText
              control={control}
              name="phoneNumber"
              type="text"
              optionalLabel="Teléfono"
              variant="outlined"
              margin="dense"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneOutlined color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className={styles.columnContainer}>
          <InputText
            control={control}
            name="street"
            type="text"
            optionalLabel="Dirección"
            variant="outlined"
            margin="dense"
            size="small"
          />
          <InputText
            control={control}
            name="zipCode"
            type="text"
            optionalLabel="Código postal"
            variant="outlined"
            margin="dense"
            size="small"
          />
          <InputText
            control={control}
            name="city"
            type="text"
            optionalLabel="Localidad"
            variant="outlined"
            margin="dense"
            size="small"
          />
          <InputText
            control={control}
            name="province"
            type="text"
            optionalLabel="Provincia"
            variant="outlined"
            margin="dense"
            size="small"
          />
        </div>
      </div>
      <Button
        color="primary"
        variant="contained"
        className={styles.sendBtn}
        onClick={handleSubmit(submitHandler)}
      >
        Editar Cliente
      </Button>
    </form>
  );
};
export default Client;
