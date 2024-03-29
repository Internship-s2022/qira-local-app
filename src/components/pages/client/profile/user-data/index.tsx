import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@mui/material';

import { InputText } from 'src/components/shared/ui/input';
import { Loader } from 'src/components/shared/ui/loader';
import { updateClientInformation } from 'src/redux/auth/thunks';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes, Options } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './userData.module.css';
import { updateUserData } from './validations';

export interface formData {
  codeArea: string;
  phoneNumber: string;
}

const UserData = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const isFetching = useSelector((state: RootState) => state.auth.isFetching);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: currentUser?.email,
      codeArea: currentUser?.phoneNumber.split('-').at(0),
      phoneNumber: currentUser?.phoneNumber.split('-').at(1),
    },
    resolver: joiResolver(updateUserData),
    mode: 'onBlur',
  });
  const codeAreaInput = watch('codeArea');
  const phoneNumberInput = watch('phoneNumber');

  const disabledBtn = useMemo(() => {
    return currentUser.phoneNumber === codeAreaInput + '-' + phoneNumberInput;
  }, [currentUser, codeAreaInput, phoneNumberInput]);

  const onSubmit = async (data: formData) => {
    const modalOptions: Options = {};
    const response = await dispatch(
      updateClientInformation({ phoneNumber: data.codeArea + '-' + data.phoneNumber }),
    );
    if (response) {
      if (response.type === 'UPDATE_CLIENT_INFORMATION_SUCCESS') {
        modalOptions.message = 'Datos editados exitosamente.';
        modalOptions.onCloseCallback = () => dispatch(closeModal());
      }
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
            name="email"
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
              name="codeArea"
              type="text"
              optionalLabel="Cod. área"
              variant="outlined"
              className={styles.inputSmall}
              margin="dense"
              disabled={false}
              size="small"
            />
            <InputText
              control={control}
              name="phoneNumber"
              type="text"
              optionalLabel="Teléfono"
              variant="outlined"
              className={styles.input}
              margin="dense"
              disabled={false}
              size="small"
            />
          </div>
          {isFetching ? (
            <div className={styles.loaderContainer}>
              <Loader />
            </div>
          ) : (
            <Button
              onClick={handleSubmit(onSubmit)}
              color="primary"
              variant="contained"
              fullWidth
              className={styles.button}
              disabled={disabledBtn}
              type="submit"
            >
              Guardar
            </Button>
          )}
        </form>
      </section>
    </>
  );
};

export default UserData;
