import Joi from 'joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, InputAdornment } from '@mui/material';

import { login } from 'src/redux/auth/thunks';
import { Actions as AuthActions } from 'src/redux/auth/types';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch } from 'src/redux/store';

import { InputText } from '../../input';
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
      'string.min': 'Debe contener al menos 8 carateres.',
      'string.pattern.base': 'Debe contener números y letras.',
    }),
});

export const LoginModal = () => {
  const dispatch: AppDispatch<null> = useDispatch();

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: joiResolver(loginValidation),
  });

  const onSubmit = async (User) => {
    const response = await dispatch(login(User));
    if (response.type === AuthActions.LOGIN_SUCCESS) {
      dispatch(closeModal());
    } else {
      dispatch(
        openModal(ModalTypes.ERROR, {
          message: 'Usuario o contraseña incorrecta.',
          onConfirmCallback: () => dispatch(openModal(ModalTypes.LOGIN)),
        }),
      );
    }
  };

  return (
    <div className={styles.container}>
      <form>
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
              fullWidth={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon style={{ color: '#F05523' }} />
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
              fullWidth={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon style={{ color: '#F05523' }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Button onClick={handleSubmit(onSubmit)} variant="contained" className={styles.button}>
            Iniciar sesión
          </Button>
        </div>
      </form>
    </div>
  );
};
