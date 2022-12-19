import Joi from 'joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { LockOutlined } from '@mui/icons-material';
import { Button, InputAdornment } from '@mui/material';

import { RootState } from 'src/redux/store';

import { InputText } from '../../input';
import styles from './change-password.module.css';
import { ChangePasswordFormValues } from './types';

export const ChangePassword = () => {
  const options = useSelector((state: RootState) => state.modal.options);

  const resetPasswordValidations = Joi.object({
    password: Joi.string().alphanum().min(8).required().messages({
      'string.empty': 'Contraseña es un campo requerido.',
      'string.alphanum': 'Contraseña inválida, debe contener letras y números.',
      'string.min': 'Contraseña inválida, debe contener al menos 8 caracteres.',
    }),
    repeatPassword: Joi.string().valid(Joi.ref('password')).required().messages({
      'string.empty': 'Repetir contraseña es un campo requerido.',
      'string.valid': 'Las contraseñas no coinciden.',
    }),
  });

  const { handleSubmit, control, reset } = useForm<ChangePasswordFormValues>({
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
    mode: 'onSubmit',
    resolver: joiResolver(resetPasswordValidations),
  });

  const submitHandler = (data) => {
    options.onConfirmCallback(data);
    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.messageContainer}>{options.message}</div>
      <form className={styles.formContainer}>
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
      </form>
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          component="label"
          color="error"
          className={styles.buttonCancel}
          onClick={options.onCloseCallback}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit(submitHandler)}
          color="success"
          variant="contained"
          className={styles.buttonAccept}
          component="label"
        >
          Aceptar
        </Button>
      </div>
    </div>
  );
};
