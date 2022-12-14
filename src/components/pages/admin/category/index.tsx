import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@mui/material';

import { ImageInput } from 'src/components/shared/ui/image-input';
import { InputText } from 'src/components/shared/ui/input';
import { toBase64 } from 'src/helper/form';
import { resetCategory } from 'src/redux/category/actions';
import { createCategory, getCategoryById, updateCategory } from 'src/redux/category/thunk';
import { Actions } from 'src/redux/category/types';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes, Options } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './form.module.css';
import { CategoryFormValues, ImageToSend } from './types';
import { CategoryValidations } from './validations';

const CategoryForm = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const category = useSelector((state: RootState) => state.categories.selectedCategory);
  const { handleSubmit, control, reset, setValue } = useForm<CategoryFormValues>({
    defaultValues: {
      name: '',
      image: undefined,
      url: '',
    },
    mode: 'onBlur',
    resolver: joiResolver(CategoryValidations),
  });

  useEffect(() => {
    params.id && dispatch(getCategoryById(params.id));
    return () => {
      dispatch(resetCategory());
    };
  }, []);

  useEffect(() => {
    if (category?._id) {
      reset({
        name: category.name,
        image: {
          url: category.image.url,
          isNew: false,
        },
        url: category.url,
      });
    }
  }, [category]);

  const onSubmit = async (data: CategoryFormValues) => {
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
      url: data.url,
    };
    const modalOptions: Options = {};
    if (params.id) {
      const response = await dispatch(updateCategory(params.id, submitData));
      if (response?.type === Actions.UPDATE_CATEGORY_SUCCESS) {
        modalOptions.message = 'Categoría editada exitosamente.';
        modalOptions.onCloseCallback = () => {
          dispatch(closeModal());
          navigate('/admin/categories');
        };
      }
    } else {
      const response = await dispatch(createCategory(submitData));
      if (response?.type === Actions.CREATE_CATEGORY_SUCCESS) {
        modalOptions.message = 'Categoría creada exitosamente.';
        modalOptions.onCloseCallback = () => {
          dispatch(closeModal());
          navigate('/admin/categories');
        };
      }
    }
    if (!modalOptions.message) {
      modalOptions.message = 'Ha ocurrido un error';
    }
    dispatch(openModal(ModalTypes.INFO, modalOptions));
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <h1>{params.id ? 'Editar categoría' : 'Agregar nueva categoría'}</h1>
      </div>
      <form className={styles.formContainer}>
        <div className={styles.columnsContainer}>
          <div className={styles.inputsContainer}>
            <InputText
              className={styles.input}
              control={control}
              name="name"
              type="text"
              optionalLabel="Nombre *"
              variant="outlined"
              margin="dense"
              size="small"
            />
            <InputText
              className={styles.input}
              control={control}
              name="url"
              type="text"
              optionalLabel="URL *"
              variant="outlined"
              margin="dense"
              size="small"
            />
          </div>
          <div className={styles.imageInputContainer}>
            <ImageInput control={control} name="image" label="Imagen *" setValue={setValue} />
          </div>
        </div>
        <Button className={styles.button} variant="contained" onClick={handleSubmit(onSubmit)}>
          {params.id ? 'Editar' : 'Agregar'}
        </Button>
      </form>
    </>
  );
};

export default CategoryForm;
