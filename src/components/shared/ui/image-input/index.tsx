import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddCircle, Edit } from '@mui/icons-material';
import { Button, IconButton, Tooltip } from '@mui/material';

import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch } from 'src/redux/store';

import { CustomFile } from '../modal/types';
import styles from './image-input.module.css';
import { ImageInputProps } from './types';

export const ImageInput = <TValuesForm extends FieldValues>({
  name,
  control,
  defaultValue,
  label,
  setValue,
}: ImageInputProps<TValuesForm>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue });

  const dispatch: AppDispatch<null> = useDispatch();

  const onSubmit = (image: CustomFile) => {
    if (!image) {
      return setValue('image', undefined);
    }
    const objectUrl = URL.createObjectURL(image);
    setValue('image', {
      file: image,
      url: objectUrl,
      isNew: true,
    });
    dispatch(closeModal());
    return () => URL.revokeObjectURL(objectUrl);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      <div className={styles.imageContainer}>
        {field.value?.url ? (
          <div className={styles.imageContainer}>
            <img className={styles.image} src={field.value?.url} />
            <Tooltip title="Editar" className={styles.editButton}>
              <IconButton
                onClick={() =>
                  dispatch(
                    openModal(ModalTypes.UPLOAD_IMAGE, {
                      onConfirmCallback: onSubmit,
                    }),
                  )
                }
              >
                <Edit color="info" />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <div className={styles.imageContainer}>
            <Button
              variant="contained"
              color="secondary"
              className={styles.button}
              onClick={() =>
                dispatch(
                  openModal(ModalTypes.UPLOAD_IMAGE, {
                    onConfirmCallback: onSubmit,
                  }),
                )
              }
            >
              <AddCircle color="info"></AddCircle>
            </Button>
            <div className={error ? styles.showError : styles.hideError}>
              <p>{error?.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
