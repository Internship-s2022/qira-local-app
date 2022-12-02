import Joi from 'joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { AccountCircleOutlined, LockOutlined, MailOutlineOutlined } from '@mui/icons-material';
import { Button, InputAdornment } from '@mui/material';

import { login } from 'src/redux/auth/thunks';
import { Actions as AuthActions } from 'src/redux/auth/types';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes, Options } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import { InputText } from '../../input';
import { Loader } from '../../loader';
import styles from './login.module.css';
import { FormValues } from './types';

const loginValidation = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(7)
    .required()
    .messages({
      'string.min': 'Debe contener al menos 7 caracteres.',
      'string.empty': 'Campo requerido.',
      'string.email': 'Formato de email inválido.',
    }),
  password: Joi.string()
    .required()
    .min(8)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .messages({
      'string.empty': 'Campo requerido.',
      'string.min': 'Debe contener al menos 8 caracteres.',
      'string.pattern.base': 'Debe contener números y letras.',
    }),
});

export const LoginModal = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const isFetching = useSelector((state: RootState) => state.auth.isFetching);
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: joiResolver(loginValidation),
  });

  const onSubmit = async (User) => {
    const modalOptions: Options = {};
    const response = await dispatch(login(User));
    if (response.type === AuthActions.LOGIN_SUCCESS) {
      modalOptions.message = 'Sesión iniciada exitosamente.';
      modalOptions.onCloseCallback = () => dispatch(closeModal());
    }
    if (!modalOptions.message) {
      modalOptions.message = 'Usuario o contraseña incorrecta.';
    }
    dispatch(openModal(ModalTypes.INFO, modalOptions));
  };

  return (
    <div className={styles.container}>
      <form data-testid="form-container">
        <div className={styles.formContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Iniciar sesión</h2>
          </div>
          <div className={styles.input}>
            <InputText
              control={control}
              name="email"
              optionalLabel="Email *"
              variant="outlined"
              margin="dense"
              size="small"
              data-testid="login-email"
              fullWidth={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineOutlined style={{ color: '#F05523' }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={styles.input}>
            <InputText
              control={control}
              name="password"
              type="password"
              optionalLabel="Password *"
              variant="outlined"
              margin="dense"
              size="small"
              data-testid="login-password"
              fullWidth={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined style={{ color: '#F05523' }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          {isFetching ? (
            <Loader />
          ) : (
            <Button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              variant="contained"
              className={styles.button}
              data-testid="login-submit"
            >
              Iniciar sesión
            </Button>
          )}

          <div className={styles.registerContainer}>
            <AccountCircleOutlined color="primary" />
            <p
              data-testid="sign-up-btn"
              className={styles.registerText}
              onClick={() => dispatch(openModal(ModalTypes.REGISTER_FORM))}
            >
              ¿Eres nuevo en QIRA? Registrate
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
