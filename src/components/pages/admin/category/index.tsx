import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@mui/material';

import { ImageInput } from 'src/components/shared/ui/image-input';
import { InputText } from 'src/components/shared/ui/input';
import { createCategory, getCategoryById, updateCategory } from 'src/redux/category/thunk';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './form.module.css';
import { CategoryFormValues, ImageToSend, toBase64 } from './types';
import { CategoryValidations } from './validations';

const CategoryForm = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const category = useSelector((state: RootState) => state.categories.category);
  const { handleSubmit, control, reset, setValue } = useForm<CategoryFormValues>({
    defaultValues: {
      name: '',
      image: undefined,
    },
    mode: 'onBlur',
    resolver: joiResolver(CategoryValidations),
  });

  useEffect(() => {
    dispatch(getCategoryById(params.id));
  }, []);

  useEffect(() => {
    if (category?._id) {
      reset({
        name: category?.name,
        image: {
          url: category?.image.url,
          isNew: false,
        },
      });
    }
  }, [category]);

  const onSubmit = async (data) => {
    const image = data.image;
    let imageToSend: ImageToSend;
    if (image?.isNew) {
      const imageFile: any = await toBase64(image.file);
      if (imageFile) {
        imageToSend = {
          base64: imageFile,
          name: image.file.name,
          type: image.file.type,
          isNew: true,
        };
      }
    }
    const submitData = {
      name: data.name,
      image: imageToSend,
    };
    params.id
      ? dispatch(updateCategory(params.id, submitData))
      : dispatch(createCategory(submitData));
    navigate('/admin/categories');
    reset();
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <h1>{params.id ? 'Editar categoría' : 'Agregar nueva categoría'}</h1>
      </div>
      <form className={styles.formContainer}>
        <InputText
          control={control}
          name="name"
          type="text"
          color="info"
          optionalLabel="Nombre de la categoría"
          variant="outlined"
          margin="dense"
          size="small"
        />
        <ImageInput control={control} name="image" optionalLabel="Imagen" setValue={setValue} />
        <Button
          className={styles.button}
          variant="contained"
          color="info"
          onClick={handleSubmit(onSubmit)}
        >
          {params.id ? 'Editar' : 'Agregar'}
        </Button>
      </form>
    </>
  );
};

export default CategoryForm;
