import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { LockOutlined, MailOutlineOutlined, PhoneOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import { InputText } from 'src/components/shared/ui/input';
import { SharedSelect } from 'src/components/shared/ui/select';
import { Options } from 'src/components/shared/ui/select/types';
import { register } from 'src/redux/auth/thunks';
import { closeModal } from 'src/redux/modal/actions';
import { AppDispatch } from 'src/redux/store';
import { IvaCondition } from 'src/types';

import styles from './signup.module.css';
import { SignUpFormValues } from './types';
import { signUpValidations } from './validations';

const SignUpForm = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const { handleSubmit, control, reset } = useForm<SignUpFormValues>({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
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
    mode: 'onBlur',
    resolver: joiResolver(signUpValidations),
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
      password: data.password,
      isActive: true,
      logicDelete: false,
    };
    return formattedUser;
  };

  const onSubmit = (data) => {
    const formattedUser = formatSubmitData(data);
    dispatch(register(formattedUser));
    dispatch(closeModal());
    reset();
  };

  return (
    <form className={styles.container}>
      <h2 className={styles.title}>Crear cuenta</h2>
      <div className={styles.formContainer}>
        <div className={styles.columnContainer}>
          <InputText
            className={styles.input}
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
          <InputText
            className={styles.input}
            control={control}
            name="password"
            type="password"
            optionalLabel="Contraseña"
            variant="outlined"
            margin="dense"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <InputText
            className={styles.input}
            control={control}
            name="repeatPassword"
            type="password"
            optionalLabel="Repetir contraseña"
            variant="outlined"
            margin="dense"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined color="primary" />
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
              className={styles.input}
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
            className={styles.input}
            control={control}
            name="businessName"
            type="text"
            optionalLabel="Razón Social"
            variant="outlined"
            margin="dense"
            size="small"
          />
          <div className={styles.input}>
            <SharedSelect
              control={control}
              name="ivaCondition"
              optionalLabel="Condición de IVA"
              margin="dense"
              size="small"
              options={IvaConditionOptions}
            />
          </div>

          <InputText
            className={styles.input}
            control={control}
            name="cuit"
            type="text"
            optionalLabel="CUIT"
            variant="outlined"
            margin="dense"
            size="small"
          />
          <div className={styles.addressInputs}>
            <div className={styles.midInput}>
              <InputText
                control={control}
                name="street"
                type="text"
                optionalLabel="Dirección"
                variant="outlined"
                margin="dense"
                size="small"
              />
            </div>
            <div className={styles.midInput}>
              <InputText
                control={control}
                name="zipCode"
                type="text"
                optionalLabel="Código postal"
                variant="outlined"
                margin="dense"
                size="small"
              />
            </div>
          </div>
          <div className={styles.addressInputs}>
            <div className={styles.midInput}>
              <InputText
                control={control}
                name="city"
                type="text"
                optionalLabel="Localidad"
                variant="outlined"
                margin="dense"
                size="small"
              />
            </div>
            <div className={styles.midInput}>
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
        </div>
      </div>
      <Button
        color="primary"
        variant="contained"
        className={styles.signUpBtn}
        onClick={handleSubmit(onSubmit)}
      >
        Crear cuenta
      </Button>
    </form>
  );
};

export default SignUpForm;
