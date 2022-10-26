import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import { MenuItem, TextField } from '@mui/material';

import { getCategoriesAsOptions } from 'src/redux/category/selectors/getCategoryAsOptions';
import * as thunks from 'src/redux/category/thunk';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch } from 'src/redux/store';

import styles from './header.module.css';

const Header = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(getCategoriesAsOptions);
  console.log(categories);

  useEffect(() => {
    dispatch(thunks.getCategory());
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navBarContainer}>
        <div className={styles.currency}>Tipo de cambio</div>
        <nav className={styles.navbar}>
          <ul className={styles.navBarLinks}>
            <li>Quienes Somos?</li>
            <li>Preguntas Frecuentes</li>
            <li>Medios de Pago</li>
          </ul>
        </nav>
      </div>
      <nav className={styles.mainHeader}>
        <div>
          <img
            className={styles.logoQira}
            src={`${process.env.PUBLIC_URL}/assets/images/logo-qira.svg`}
            alt=""
          />
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.categories}>
            <TextField select label="Categorías" fullWidth size="small">
              {categories.map((category, index) => (
                <MenuItem key={index} onClick={() => navigate('/')} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              className={styles.searchBar}
              id="search-bar"
              label="Buscar..."
              type="search"
              size="small"
            />
          </div>
        </div>
        <div className={styles.routes}>
          <div>
            <a onClick={() => dispatch(openModal(ModalTypes.LOGIN))}>login</a>
          </div>
          <div>
            <a onClick={() => dispatch(openModal(ModalTypes.REGISTER_FORM))}>Sign up</a>
          </div>
        </div>
        <ShoppingCart color="secondary" />
      </nav>
    </header>
  );
};

export default Header;
