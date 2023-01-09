import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { ArrowBack, MailOutlineOutlined, PhoneOutlined } from '@mui/icons-material';
import { Button, IconButton, InputAdornment } from '@mui/material';

import { InputText } from 'src/components/shared/ui/input';
import QiraLoader from 'src/components/shared/ui/qira-loader';
import { SharedSelect } from 'src/components/shared/ui/select';
import { Options as SelectOptions } from 'src/components/shared/ui/select/types';
import { Actions } from 'src/redux/clients/types';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes, Options } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';
import { IvaCondition } from 'src/types';

import * as thunks from '../../../../redux/clients/thunk';
import styles from './client.module.css';
import { UpdateClientValues } from './types';
import { updateClientValidations } from './validations';

const ClientForm = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const selectedClient = useSelector((state: RootState) => state.clients.selectedClient);
  const isFetching = useSelector((state: RootState) => state.clients.isFetching);

  useEffect(() => {
    dispatch(thunks.getClient(params.id));
  }, []);

  useEffect(() => {
    if (selectedClient?.email) {
      reset({
        email: selectedClient?.email,
        codeArea: selectedClient?.phoneNumber.split('-').at(0),
        phoneNumber: selectedClient?.phoneNumber.split('-').at(1),
        businessName: selectedClient?.businessName,
        cuit: selectedClient?.cuit,
        ivaCondition: selectedClient?.ivaCondition,
        province: selectedClient?.address.province,
        city: selectedClient?.address.city,
        zipCode: selectedClient?.address.zipCode,
        street: selectedClient?.address.street,
      });
    }
  }, [selectedClient]);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm<UpdateClientValues>({
    defaultValues: {
      email: '',
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
    resolver: joiResolver(updateClientValidations),
  });

  const IvaConditionOptions: SelectOptions[] = [
    { label: 'Responsable Inscripto', value: IvaCondition.registeredResponsible },
    { label: 'Exento', value: IvaCondition.exempt },
    { label: 'Consumidor Final', value: IvaCondition.finalConsumer },
    { label: 'Monotributista', value: IvaCondition.selfEmployment },
  ];

  const formatDataFunction = (data: UpdateClientValues) => {
    const dataFormated = {
      email: data.email,
      phoneNumber: data.codeArea + '-' + data.phoneNumber,
      businessName: data.businessName,
      cuit: data.cuit,
      ivaCondition: data.ivaCondition,
      address: {
        province: data.province,
        city: data.city,
        zipCode: data.zipCode,
        street: data.street,
      },
    };
    return dataFormated;
  };

  const onSubmit = async (data: UpdateClientValues) => {
    const modalOptions: Options = {};
    const response = await dispatch(thunks.updateClient(params.id, formatDataFunction(data)));
    if (response?.type === Actions.UPDATE_CLIENT_SUCCESS) {
      modalOptions.message = 'Cliente editado exitosamente.';
      modalOptions.onCloseCallback = () => {
        dispatch(closeModal());
        navigate('/admin/clients');
      };
    }
    if (!modalOptions.message) {
      modalOptions.message = 'Ha ocurrido un error';
    }
    dispatch(openModal(ModalTypes.INFO, modalOptions));
  };
  return (
    <>
      {isFetching ? (
        <div className={styles.loaderContainer}>
          <QiraLoader />
        </div>
      ) : (
        <section className={styles.sectionContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Datos del cliente</h2>
            <div className={styles.goBack}>
              <h3>Volver a la lista</h3>
              <IconButton
                className={styles.backButton}
                disableRipple={true}
                size="large"
                onClick={() => navigate('/admin/clients')}
              >
                <ArrowBack />
              </IconButton>
            </div>
          </div>
          <form className={styles.formContainer}>
            <div className={styles.container}>
              <div className={styles.columnContainer}>
                <InputText
                  control={control}
                  name="email"
                  optionalLabel="Email *"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  disabled
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineOutlined color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <InputText
                  control={control}
                  name="businessName"
                  type="text"
                  optionalLabel="Razón Social *"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                />
                <InputText
                  control={control}
                  name="cuit"
                  type="text"
                  optionalLabel="CUIT *"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                />
                <SharedSelect
                  control={control}
                  name="ivaCondition"
                  optionalLabel="Condición de IVA *"
                  margin="dense"
                  size="small"
                  options={IvaConditionOptions}
                  fullWidth
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
                  control={control}
                  name="street"
                  type="text"
                  optionalLabel="Dirección *"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                />
                <InputText
                  control={control}
                  name="zipCode"
                  type="text"
                  optionalLabel="Código postal *"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                />
                <InputText
                  control={control}
                  name="city"
                  type="text"
                  optionalLabel="Localidad *"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                />
                <InputText
                  control={control}
                  name="province"
                  type="text"
                  optionalLabel="Provincia *"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth
                />
              </div>
            </div>
            <Button
              color="primary"
              variant="contained"
              className={styles.sendBtn}
              onClick={handleSubmit(onSubmit)}
              disabled={!isDirty}
              type="submit"
            >
              Editar Cliente
            </Button>
          </form>
        </section>
      )}
    </>
  );
};
export default ClientForm;
