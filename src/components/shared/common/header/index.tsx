import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import { MenuItem, TextField } from '@mui/material';

import { getCategoriesAsOptions } from 'src/redux/category/selectors/getCategoryAsOptions';
import * as thunksCategories from 'src/redux/category/thunk';
import * as thunksExchangeRate from 'src/redux/exchange-rate/thunk';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './header.module.css';

const Header = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(getCategoriesAsOptions);
  const exchangeRate = useSelector((state: RootState) => state.exchangeRate.exchangeRate);
  const currentUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(thunksCategories.getCategory());
    dispatch(thunksExchangeRate.getExchangeRate());
  }, []);

  // console.log(exchangeRate);

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
          <div>
            <TextField
              select
              placeholder="Categorías"
              className={styles.categories}
              fullWidth
              size="small"
            >
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
              placeholder="Buscar..."
              type="search"
              size="small"
              color="secondary"
            />
          </div>
        </div>
        <div className={styles.routes}>
          {currentUser?.email ? (
            <div className={styles.btnLogin}>
              <a onClick={() => navigate('client/')}>Go to profile</a>
            </div>
          ) : (
            <div className={styles.btnLogin}>
              <a onClick={() => dispatch(openModal(ModalTypes.LOGIN))}>Login</a>
            </div>
          )}
        </div>
        <ShoppingCart className={styles.shoppingCart} />
      </nav>
    </header>
  );
};

export default Header;
