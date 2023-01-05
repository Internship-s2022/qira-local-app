import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { LockOutlined } from '@mui/icons-material';
import { Button, InputAdornment } from '@mui/material';

import * as thunks from 'src/redux/auth/thunks';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes, Options } from 'src/redux/modal/types';
import { AppDispatch } from 'src/redux/store';

import { InputText } from '../../../../shared/ui/input';
import styles from './change-password.module.css';
import { ChangePasswordFormValues } from './types';
import { updatePassword } from './validations';

const Password = () => {
  const dispatch: AppDispatch<null> = useDispatch();

  const { handleSubmit, control, reset } = useForm<ChangePasswordFormValues>({
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
    mode: 'onBlur',
    resolver: joiResolver(updatePassword),
  });

  const onSubmit = async (data: ChangePasswordFormValues) => {
    const modalOptions: Options = {};
    const response = await dispatch(thunks.updatePassword({ password: data.password }));
    if (response) {
      if (response.type === 'UPDATE_PASSWORD_SUCCESS') {
        modalOptions.message = 'Contraseña editada exitosamente.';
        modalOptions.onCloseCallback = () => dispatch(closeModal());
      }
    }
    if (!modalOptions.message) {
      modalOptions.message = 'Algo salió mal ';
    }
    dispatch(openModal(ModalTypes.INFO, modalOptions));
    reset();
  };

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.tittle}>Cambiar contraseña</h2>
        <form className={styles.formContainer}>
          <InputText
            className={styles.input}
            control={control}
            name="password"
            type="password"
            optionalLabel="Nueva contraseña"
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
          <div className={styles.buttonContainer}>
            <Button
              onClick={handleSubmit(onSubmit)}
              color="primary"
              variant="contained"
              fullWidth
              className={styles.button}
              type="submit"
            >
              Guardar
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
export default Password;
