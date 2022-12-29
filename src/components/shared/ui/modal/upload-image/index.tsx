import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Check, Image } from '@mui/icons-material';
import { Button } from '@mui/material';

import { RootState } from 'src/redux/store';

import { CustomFile } from '../types';
import styles from './upload-image.module.css';

export const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState<CustomFile>();
  const [preview, setPreview] = useState<string>();
  const options = useSelector((state: RootState) => state.modal.options);

  useEffect(() => {
    if (!selectedFile) {
      return setPreview(undefined);
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files.length) {
      const file = e.target.files[0] as CustomFile;
      setSelectedFile(file);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {selectedFile ? (
          <img className={styles.image} src={preview} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <Image className={styles.imageIcon} />
          </div>
        )}
      </div>
      <div className={styles.titleModalImage}>Selecciona una imagen</div>
      {!preview ? (
        <div className={styles.textContainer}>
          <div>
            <p className={styles.textBold}>Formatos de imagen permitidos:</p>
            <p className={styles.text}>.jpg, .png, .svg, .gif</p>
          </div>
          <div>
            <p className={styles.textBold}>Tamaño máximo:</p>
            <p className={styles.text}>5MB</p>
          </div>
        </div>
      ) : (
        <div className={styles.fileName}>
          <Check color="success" />
          <p>{selectedFile.name}</p>
        </div>
      )}
      <div className={styles.buttonContainer}>
        <Button
          variant={preview ? 'outlined' : 'contained'}
          component="label"
          className={styles.buttonSend}
        >
          {preview ? 'Elegir otro archivo' : 'Subir imagen'}
          <input hidden type="file" accept="image/*" onChange={onSelectFile} />
        </Button>
        {preview && (
          <Button
            onClick={() => options.onConfirmCallback(selectedFile)}
            className={styles.buttonSend}
            variant="contained"
            component="label"
          >
            Subir imagen
          </Button>
        )}
      </div>
    </div>
  );
};
