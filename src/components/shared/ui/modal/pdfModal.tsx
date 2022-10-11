import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

import styles from './modal.module.css';

export const PdfModal = () => {
  const [selectedNameFile, setSelectedNameFile] = useState();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!selectedNameFile) {
      setPreview(undefined);
      return;
    }

    // const objectUrl = URL.createObjectURL(selectedNameFile);
    setPreview(selectedNameFile);

    // return () => URL.revokeObjectURL(objectUrl);
  }, [selectedNameFile]);

  const onSelectFile = (e) => {
    console.log(e.target.files[0]);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedNameFile(undefined);
      return;
    }

    setSelectedNameFile(e.target.files[0].name);
  };

  return (
    <>
      <Button variant="contained" component="label">
        Upload File
        <input hidden type="file" onChange={onSelectFile} />
      </Button>
      <div>
        {selectedNameFile && <div className={styles.fileName}>{preview}</div>}
        {preview && (
          <Button variant="contained" component="label">
            subir
          </Button>
        )}
      </div>
    </>
  );
};
