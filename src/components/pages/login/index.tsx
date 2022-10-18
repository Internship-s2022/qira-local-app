import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { LockOutlined, MailOutlineOutlined, PhoneOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import { InputText } from 'src/components/shared/ui/input';
import { SharedModal } from 'src/components/shared/ui/modal';
import { ModalTypes } from 'src/components/shared/ui/modal/types';
import { SharedSelect } from 'src/components/shared/ui/select';
import { Options } from 'src/components/shared/ui/select/types';
import { register } from 'src/redux/auth/thunks';
import { AppDispatch } from 'src/redux/store';
import { IvaCondition } from 'src/types';
import { capitalizeFirstLetter } from 'src/utils/formatters';

import { SignUpFormValues } from '../signup/types';
import { signUpValidations } from '../signup/validations';
import styles from './login.module.css';

const Login = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const { handleSubmit, control } = useForm<SignUpFormValues>({
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
    mode: 'onSubmit',
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

  const submitHandler = (data) => {
    const formattedUser = formatSubmitData(data);
    dispatch(register(formattedUser));
    setShowSignUpModal(false);
  };

  return (
    <section className={styles.container}>
      <h2>{capitalizeFirstLetter('login')}</h2>
      <Button color="primary" variant="contained">
        LOG IN
      </Button>
      <Button color="primary" variant="contained" onClick={() => setShowSignUpModal(true)}>
        SIGN UP
      </Button>
      <SharedModal
        open={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
        modalType={ModalTypes.BASIC_MODAL}
      >
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
              <SharedSelect
                className={styles.input}
                control={control}
                name="ivaCondition"
                optionalLabel="Condición de IVA"
                margin="dense"
                size="small"
                options={IvaConditionOptions}
              />
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
                <InputText
                  className={styles.input}
                  control={control}
                  name="street"
                  type="text"
                  optionalLabel="Dirección"
                  variant="outlined"
                  margin="dense"
                  size="small"
                />
                <InputText
                  className={styles.input}
                  control={control}
                  name="zipCode"
                  type="text"
                  optionalLabel="Código postal"
                  variant="outlined"
                  margin="dense"
                  size="small"
                />
              </div>
              <div className={styles.addressInputs}>
                <InputText
                  className={styles.input}
                  control={control}
                  name="city"
                  type="text"
                  optionalLabel="Localidad"
                  variant="outlined"
                  margin="dense"
                  size="small"
                />
                <InputText
                  className={styles.input}
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
          <Button
            color="primary"
            variant="contained"
            className={styles.signUpBtn}
            onClick={handleSubmit(submitHandler)}
          >
            Crear cuenta
          </Button>
        </form>
      </SharedModal>
    </section>
  );
};

export default Login;
