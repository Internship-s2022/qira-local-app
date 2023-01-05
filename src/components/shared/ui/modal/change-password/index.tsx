import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { LockOutlined } from '@mui/icons-material';
import { Button, InputAdornment } from '@mui/material';

import * as thunks from 'src/redux/clients/thunk';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes, Options } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import { InputText } from '../../input';
import styles from './change-password.module.css';
import { ChangePasswordFormValues } from './types';
import { changePasswordValidation } from './validations';

export const ChangePassword = () => {
  const options = useSelector((state: RootState) => state.modal.options);
  const dispatch: AppDispatch<null> = useDispatch();

  const { handleSubmit, control } = useForm<ChangePasswordFormValues>({
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
    mode: 'onBlur',
    resolver: joiResolver(changePasswordValidation),
  });

  const onSubmit = async (data: ChangePasswordFormValues) => {
    const newPassword = { password: data.password };
    dispatch(
      openModal(ModalTypes.CONFIRM, {
        message: '¿Está seguro de que desea cambiar la contraseña del cliente?',
        onConfirmCallback: async () => {
          const modalOptions: Options = {};
          dispatch(closeModal());
          const response = await dispatch(thunks.changePassword(options.id, newPassword));
          if (response) {
            if (response.type === 'CHANGE_PASSWORD_SUCCESS') {
              modalOptions.message = 'Contraseña editada exitosamente.';
              modalOptions.onCloseCallback = () => dispatch(closeModal());
            }
          }
          if (!modalOptions.message) {
            modalOptions.message = 'Algo salió mal ';
          }
          dispatch(openModal(ModalTypes.INFO, modalOptions));
        },
        onCloseCallback: () => dispatch(closeModal()),
      }),
    );
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
