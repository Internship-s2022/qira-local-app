import React, { useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddCircle } from '@mui/icons-material';
import { Button } from '@mui/material';

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
  optionalLabel,
  setValue,
  ...props
}: ImageInputProps<TValuesForm>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue });

  const dispatch: AppDispatch<null> = useDispatch();
  const [preview, setPreview] = useState<string>();

  const onSubmit = (image: CustomFile) => {
    if (!image) {
      return setPreview(undefined);
    }
    setValue('image', {
      file: image,
      isNew: true,
    });
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);
    dispatch(closeModal());
    return () => URL.revokeObjectURL(objectUrl);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={optionalLabel}>{optionalLabel}</label>
      <div className={styles.imageContainer}>
        {preview ? (
          <img className={styles.image} src={preview} />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};
