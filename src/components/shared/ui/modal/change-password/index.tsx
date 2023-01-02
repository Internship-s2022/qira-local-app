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
import { changePasswordValidation } from './validations';

export const ChangePassword = () => {
  const options = useSelector((state: RootState) => state.modal.options);

  const { handleSubmit, control } = useForm<ChangePasswordFormValues>({
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
    mode: 'onBlur',
    resolver: joiResolver(changePasswordValidation),
  });

  const onSubmit = async (data: ChangePasswordFormValues) => {
    options.onConfirmCallback({ password: data.password });
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
          variant="outlined"
          component="label"
          color="primary"
          size="medium"
          className={styles.button}
          onClick={options.onCloseCallback}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          color="primary"
          size="medium"
          variant="contained"
          className={styles.button}
          component="label"
        >
          Aceptar
        </Button>
      </div>
    </div>
  );
};
