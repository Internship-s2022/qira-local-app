import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@mui/material';

import { InputText } from 'src/components/shared/ui/input';
import { updateClientInformation } from 'src/redux/auth/thunks';
import { User } from 'src/redux/auth/types';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes, Options } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './userData.module.css';
import { updateUserData } from './validations';

const UserData = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const previousData = useState<User>(currentUser);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: currentUser?.email,
      codeArea: currentUser?.phoneNumber.substring(0, 3),
      phoneNumber: currentUser?.phoneNumber.substring(3),
    },
    resolver: joiResolver(updateUserData),
    mode: 'onBlur',
  });
  const onSubmit = async (data) => {
    const modalOptions: Options = {};
    if (previousData[0].phoneNumber != data.codeArea + data.phoneNumber) {
      const response = await dispatch(
        updateClientInformation({ phoneNumber: data.codeArea + data.phoneNumber }),
      );
      if (response) {
        if (response.type === 'UPDATE_CLIENT_INFORMATION_SUCCESS') {
          modalOptions.message = 'Datos editados exitosamente.';
          modalOptions.onCloseCallback = () => dispatch(closeModal());
        }
      }
    } else {
      modalOptions.message = 'No hubo cambios.';
    }
    if (!modalOptions.message) {
      modalOptions.message = 'Algo salió mal ';
    }
    dispatch(openModal(ModalTypes.INFO, modalOptions));
  };

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.tittle}>Datos del usuario</h2>
        <form>
          <InputText
            control={control}
            name={'email'}
            type="text"
            optionalLabel="Email"
            variant="outlined"
            margin="dense"
            className={styles.input}
            disabled={true}
            size="small"
          />
          <div className={styles.phoneContainer}>
            <InputText
              control={control}
              name={'codeArea'}
              type="text"
              optionalLabel="Cod. Area"
              variant="outlined"
              className={styles.inputSmall}
              margin="dense"
              disabled={false}
              size="small"
            />
            <InputText
              control={control}
              name={'phoneNumber'}
              type="text"
              optionalLabel="Teléfono"
              variant="outlined"
              className={styles.input}
              margin="dense"
              disabled={false}
              size="small"
            />
          </div>
          <Button
            onClick={handleSubmit(onSubmit)}
            color="primary"
            variant="contained"
            fullWidth
            className={styles.button}
          >
            Editar
          </Button>
        </form>
      </section>
    </>
  );
};

export default UserData;
