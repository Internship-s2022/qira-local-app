import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { KeyboardArrowDown, ShoppingCart } from '@mui/icons-material';
import { TextField } from '@mui/material';

import { getCategoriesAsOptions } from 'src/redux/category/selectors/getCategoryAsOptions';
import * as thunksCategories from 'src/redux/category/thunk';
// import * as thunksExchangeRate from 'src/redux/exchange-rate/thunk';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './header.module.css';

const Header = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(getCategoriesAsOptions);
  // const exchangeRate = useSelector((state: RootState) => state.exchangeRate.exchangeRate);
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  useEffect(() => {
    dispatch(thunksCategories.getCategory());
    // dispatch(thunksExchangeRate.getExchangeRate());
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
            <div
              className={styles.buttonCategories}
              onMouseEnter={() => setOpenSelect(true)}
              onMouseLeave={() => setOpenSelect(false)}
            >
              Categorías
              <KeyboardArrowDown className={styles.categoriesArrow} />
            </div>
            {openSelect && (
              <div
                className={styles.optionsContainer}
                onMouseEnter={() => setOpenSelect(true)}
                onMouseLeave={() => setOpenSelect(false)}
              >
                {categories.map((category, index) => (
                  <span className={styles.categoryOption} key={index} onClick={() => navigate('/')}>
                    <a href="#" className={styles.categoryLinks}>
                      {category.label}
                    </a>
                  </span>
                ))}
              </div>
            )}
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
