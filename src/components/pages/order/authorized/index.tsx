import React, { useCallback, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@mui/material';

import { InputText } from 'src/components/shared/ui/input';
import { setAuthorized } from 'src/redux/shopping-cart/actions';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './authorized.module.css';
import { AuthorizedValidations } from './validations';

const authorizedInitial = { firstName: '', lastName: '', dni: '', phoneNumber: '' };

function checkEquality<T>(prevObj: T, nextObj: T) {
  const keys = Object.keys(nextObj) as (keyof T)[];
  const isEqual = prevObj && keys.every((key) => prevObj[key] == nextObj[key]);

  if (!nextObj[keys[0]]) {
    return false;
  }
  return isEqual;
}

const Authorized = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const authorizedState = useSelector((state: RootState) => state.shoppingCart.authorized);
  const [updatingIndex, setUpdatingIndex] = useState<number | null>(null);

  const { control, trigger, watch } = useForm({
    defaultValues: {
      authorized: authorizedState.length ? authorizedState : [authorizedInitial],
    },
    resolver: joiResolver(AuthorizedValidations(authorizedState[0]?.dni)),
    mode: 'onBlur',
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'authorized',
  });

  const watchFieldArray = watch('authorized');

  const handleAccept = async (index: number) => {
    const isValid = await trigger([
      `authorized.${index}.firstName`,
      `authorized.${index}.lastName`,
      `authorized.${index}.dni`,
      `authorized.${index}.phoneNumber`,
    ]);

    if (isValid) {
      const updatedAuthorized = {
        ...watchFieldArray[index],
      };
      dispatch(setAuthorized([...authorizedState, updatedAuthorized]));
    }
  };

  const handleUpdate = (index: number) => {
    setUpdatingIndex(index);
  };

  const handleSaveChanges = async (index: number) => {
    const isValid = await trigger([
      `authorized.${index}.firstName`,
      `authorized.${index}.lastName`,
      `authorized.${index}.dni`,
      `authorized.${index}.phoneNumber`,
    ]);

    if (isValid) {
      setUpdatingIndex(null);
      const updatedAuthorized = [...watchFieldArray];

      dispatch(setAuthorized(updatedAuthorized));
    }
  };

  const handleDeleteAuthorized = (index: number) => {
    const currentFieldArray = [...watchFieldArray];
    currentFieldArray.splice(index, 1);

    dispatch(setAuthorized(currentFieldArray));
    remove(index);
  };

  const handleAddOther = useCallback(() => {
    append(authorizedInitial);
    setUpdatingIndex(null);
  }, [append]);

  const disableAddOther = authorizedState.length === 0 || watchFieldArray.length > 1;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>¿Quién retira la compra?</h1>
      <p className={styles.subTitle}>Puede elegir uno o dos autorizados</p>
      <form>
        {fields.map((item, index) => {
          const isSaved = checkEquality(authorizedState[index], watchFieldArray[index]);
          const isUpdatingCurrent = updatingIndex !== null && updatingIndex === index;
          const showAcceptBtn = !isSaved && !isUpdatingCurrent;
          const showUpdateBtn = !isUpdatingCurrent && isSaved;
          const needsToSave = watchFieldArray.length !== authorizedState.length;
          const disableUpdateBtn =
            needsToSave || (updatingIndex !== null && updatingIndex !== index);
          const showSaveChangesBtn = !showAcceptBtn && !showUpdateBtn;
          const showDeleteBtn = watchFieldArray.length > 1;
          const disableDeleteBtn = needsToSave && index === 0;

          return (
            <div key={`${item.id}-${index}`}>
              <h4 className={styles.formTitle}>Autorizado a retirar</h4>
              <div className={styles.row}>
                <InputText
                  control={control}
                  name={`authorized.${index}.firstName`}
                  type="text"
                  optionalLabel="Nombre *"
                  variant="outlined"
                  margin="dense"
                  className={styles.input}
                  disabled={showUpdateBtn}
                  size="small"
                />
                <InputText
                  control={control}
                  name={`authorized.${index}.lastName`}
                  type="text"
                  optionalLabel="Apellido *"
                  variant="outlined"
                  className={styles.input}
                  margin="dense"
                  disabled={showUpdateBtn}
                  size="small"
                />
              </div>
              <div className={styles.row}>
                <InputText
                  control={control}
                  name={`authorized.${index}.dni`}
                  type="text"
                  optionalLabel="DNI *"
                  variant="outlined"
                  className={styles.input}
                  margin="dense"
                  disabled={showUpdateBtn}
                  size="small"
                />
                <InputText
                  control={control}
                  name={`authorized.${index}.phoneNumber`}
                  type="text"
                  optionalLabel="Teléfono *"
                  variant="outlined"
                  className={styles.input}
                  margin="dense"
                  disabled={showUpdateBtn}
                  size="small"
                />
              </div>
              <div className={styles.row}>
                {showAcceptBtn && (
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    className={styles.button}
                    onClick={() => handleAccept(index)}
                  >
                    Aceptar
                  </Button>
                )}

                {showUpdateBtn && (
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    disabled={disableUpdateBtn}
                    className={styles.button}
                    onClick={() => handleUpdate(index)}
                  >
                    Editar
                  </Button>
                )}

                {showSaveChangesBtn && (
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    className={styles.button}
                    onClick={() => handleSaveChanges(index)}
                  >
                    Guardar cambios
                  </Button>
                )}

                {showDeleteBtn && (
                  <Button
                    variant="contained"
                    fullWidth
                    disabled={disableDeleteBtn}
                    className={styles.deleteBtn}
                    onClick={() => handleDeleteAuthorized(index)}
                  >
                    Eliminar
                  </Button>
                )}
              </div>
            </div>
          );
        })}
        <Button
          color="secondary"
          variant="contained"
          disabled={disableAddOther}
          onClick={handleAddOther}
          className={styles.addButton}
        >
          Agregar autorizado
        </Button>
      </form>
    </section>
  );
};

export default Authorized;
