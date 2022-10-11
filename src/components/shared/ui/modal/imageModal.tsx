import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

import styles from './modal.module.css';

export const ImageModal = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <Button variant="contained" component="label">
        Upload File
        <input hidden type="file" onChange={onSelectFile} />
      </Button>
      <div>
        {selectedFile && <img className={styles.image} src={preview} />}
        {preview && (
          <Button variant="contained" component="label">
            subir
          </Button>
        )}
      </div>
    </>
  );
};
