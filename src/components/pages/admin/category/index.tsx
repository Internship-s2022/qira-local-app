import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { ArrowBack } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

import { ImageInput } from 'src/components/shared/ui/image-input';
import { InputText } from 'src/components/shared/ui/input';
import QiraLoader from 'src/components/shared/ui/qira-loader';
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
  const categories = useSelector((state: RootState) => state.categories.categories);
  const isFetching = useSelector((state: RootState) => state.categories.isFetching);
  const categoriesNotSelected = categories.filter((item) => item?._id !== category?._id);
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { isDirty },
  } = useForm<CategoryFormValues>({
    defaultValues: {
      name: '',
      image: undefined,
      url: '',
    },
    mode: 'onBlur',
    resolver: joiResolver(CategoryValidations),
  });
  const imageInput = watch('image');

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

  const duplicatedCategory = (data: CategoryFormValues) => {
    return categoriesNotSelected.some(
      (category) => category.name === data.name || category.url === data.url,
    );
  };

  const onSubmit = async (data: CategoryFormValues) => {
    if (duplicatedCategory(data)) {
      return dispatch(
        openModal(ModalTypes.INFO, { message: 'La categoría que intenta crear ya existe.' }),
      );
    }
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
      name: data.name.trim(),
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
        <div className={styles.goBack}>
          <h3>Volver a la lista</h3>
          <IconButton
            className={styles.backButton}
            disableRipple={true}
            size="large"
            onClick={() => navigate('/admin/categories')}
          >
            <ArrowBack />
          </IconButton>
        </div>
      </div>
      {isFetching ? (
        <div className={styles.loaderContainer}>
          <QiraLoader />
        </div>
      ) : (
        <form className={styles.formContainer}>
          <div className={styles.columnsContainer}>
            <div className={styles.inputsContainer}>
              <div className={styles.nameContainer}>
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
              </div>
              <InputText
                className={styles.input}
                control={control}
                name="url"
                type="text"
                optionalLabel="URL *"
                tooltipText={
                  'La URL debe contener sólo palabras en minúscula y separadas por un guión (-).'
                }
                variant="outlined"
                margin="dense"
                size="small"
              />
            </div>
            <div className={styles.imageInputContainer}>
              <ImageInput control={control} name="image" label="Imagen *" setValue={setValue} />
            </div>
          </div>
          <Button
            className={styles.button}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            disabled={params.id ? !isDirty && !imageInput?.isNew : false}
          >
            {params.id ? 'Editar' : 'Agregar'}
          </Button>
        </form>
      )}
    </>
  );
};

export default CategoryForm;
