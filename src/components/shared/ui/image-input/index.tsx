import React, { useEffect, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddCircle } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';

import { closeModal, openModal } from 'src/redux/modal/actions';
import { AppDispatch } from 'src/redux/store';

import { CustomFile, ModalTypes } from '../modal/types';
import styles from './image-input.module.css';
import { ImageInputProps } from './types';

export const ImageInput = <TValuesForm extends FieldValues>({
  name,
  control,
  defaultValue,
  optionalLabel,
  ...props
}: ImageInputProps<TValuesForm>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue });

  const dispatch: AppDispatch<null> = useDispatch();
  const [selectedFile, setSelectedFile] = useState<CustomFile>();
  const [preview, setPreview] = useState<string>();

  const onSubmit = () => {
    if (!selectedFile) {
      return setPreview(undefined);
    }
    console.log('aca');
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    dispatch(closeModal());
    return () => URL.revokeObjectURL(objectUrl);
  };

  const onSelectFile = (e) => {
    if (e.target.files.length) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor={optionalLabel}>{optionalLabel}</label>
      <div className={styles.imageContainer}>
        {selectedFile ? (
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
                    onConfirmCallback() {
                      onSubmit();
                    },
                  }),
                )
              }
            >
              <AddCircle color="info"></AddCircle>
            </Button>
            <input hidden type="file" accept="image/*" onChange={onSelectFile} />
          </>
        )}
      </div>
    </div>
  );
};
