import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddCircle, Edit } from '@mui/icons-material';
import { Button, IconButton, Tooltip } from '@mui/material';

import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch } from 'src/redux/store';

import { CustomFile } from '../modal/types';
import styles from './pdf-input.module.css';
import { PdfInputProps } from './types';

export const PdfInput = <TValuesForm extends FieldValues>({
  name,
  control,
  defaultValue,
  label,
  setValue,
}: PdfInputProps<TValuesForm>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue });

  const dispatch: AppDispatch<null> = useDispatch();

  const onSubmit = (technicalFile: CustomFile) => {
    if (!technicalFile) {
      return setValue('technicalFile', undefined);
    }

    setValue('technicalFile', {
      file: technicalFile,
      name: technicalFile.name,
      isNew: true,
    });
    dispatch(closeModal());
  };

  return (
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      <div className={styles.fileContainer}>
        {field.value?.name ? (
          <div className={styles.fileContainer}>
            <p className={styles.fileName}>{field.value?.name}</p>
            <Tooltip title="Editar" className={styles.editButton}>
              <IconButton
                onClick={() =>
                  dispatch(
                    openModal(ModalTypes.UPLOAD_PDF, {
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
          <div className={styles.fileContainer}>
            <Button
              variant="contained"
              color="secondary"
              className={styles.button}
              onClick={() =>
                dispatch(
                  openModal(ModalTypes.UPLOAD_PDF, {
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
