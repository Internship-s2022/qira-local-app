import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import {
  AccountCircleOutlined,
  LockOutlined,
  MailOutlineOutlined,
  PhoneOutlined,
} from '@mui/icons-material';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import { InputText } from 'src/components/shared/ui/input';
import { SharedSelect } from 'src/components/shared/ui/select';
import { Options } from 'src/components/shared/ui/select/types';
import { register } from 'src/redux/auth/thunks';
import { Actions } from 'src/redux/auth/types';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes, Options as ModalOptions } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';
import { IvaCondition } from 'src/types';

import { Loader } from '../../loader';
import styles from './signup.module.css';
import { SignUpFormValues } from './types';
import { signUpValidations } from './validations';

const SignUpForm = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const isFetching = useSelector((state: RootState) => state.auth.isFetching);
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
      phoneNumber: data.codeArea + '-' + data.phoneNumber,
      email: data.email,
      password: data.password,
    };
    return formattedUser;
  };

  const onSubmit = async (data) => {
    const formattedUser = formatSubmitData(data);
    const modalOptions: ModalOptions = {};
    const response = await dispatch(register(formattedUser));
    if (response?.type !== Actions.REGISTER_ERROR) {
      modalOptions.message = 'Cuenta creada exitosamente.';
      modalOptions.onCloseCallback = () => dispatch(closeModal());
      reset();
    }
    if (response.payload.message === 'The email address is already in use by another account.') {
      modalOptions.message = 'La cuenta de email que intenta registrar ya existe.';
    }
    if (!modalOptions.message) {
      modalOptions.message = 'Ha ocurrido un error';
    }
    dispatch(openModal(ModalTypes.INFO, modalOptions));
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
            optionalLabel="Email *"
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
            optionalLabel="Contraseña *"
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
            optionalLabel="Repetir contraseña *"
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
              optionalLabel="Cod. área *"
              variant="outlined"
              margin="dense"
              size="small"
            />
            <InputText
              className={styles.input}
              control={control}
              name="phoneNumber"
              type="text"
              optionalLabel="Teléfono *"
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
            optionalLabel="Razón Social *"
            variant="outlined"
            margin="dense"
            size="small"
          />
          <div className={styles.input}>
            <SharedSelect
              control={control}
              name="ivaCondition"
              optionalLabel="Condición de IVA *"
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
            optionalLabel="CUIT *"
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
                optionalLabel="Dirección *"
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
                optionalLabel="Código postal *"
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
                optionalLabel="Localidad *"
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
                optionalLabel="Provincia *"
                variant="outlined"
                margin="dense"
                size="small"
              />
            </div>
          </div>
        </div>
      </div>
      {isFetching ? (
        <Loader />
      ) : (
        <Button
          color="primary"
          variant="contained"
          className={styles.signUpBtn}
          onClick={handleSubmit(onSubmit)}
          data-testid="signup-btn"
        >
          Crear cuenta
        </Button>
      )}
      <div className={styles.loginContainer} data-testid="back-login">
        <AccountCircleOutlined color="primary" />
        <p className={styles.loginText} onClick={() => dispatch(openModal(ModalTypes.LOGIN))}>
          ¿Ya estás registrado? Inicia sesión.
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
