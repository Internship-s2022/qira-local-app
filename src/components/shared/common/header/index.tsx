import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AccountCircle, KeyboardArrowDown, ShoppingCart } from '@mui/icons-material';
import { TextField } from '@mui/material';

import { getCategoriesAsOptions } from 'src/redux/category/selectors/getCategoryAsOptions';
import * as thunksCategories from 'src/redux/category/thunk';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';
import { UserRole } from 'src/types';

import styles from './header.module.css';

const Header = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(getCategoriesAsOptions);
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const currentRole = useSelector((state: RootState) => state.auth.role);
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  useEffect(() => {
    dispatch(thunksCategories.getCategory());
  }, []);
  console.log(typeof currentUser);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navBarContainer}>
        <div className={styles.currency}>Tipo de cambio</div>
      </div>
      <nav className={styles.mainHeaderContainer}>
        <div className={styles.mainHeader}>
          <div>
            <a href="/">
              <img
                className={styles.logoQira}
                src={`${process.env.PUBLIC_URL}/assets/images/logo-qira.svg`}
                alt=""
              />
            </a>
          </div>
          <div className={styles.searchContainer}>
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
          <div className={styles.profileContainer}>
            <div className={styles.routes}>
              {currentUser?.email ? (
                <div className={styles.btnLogin}>
                  <AccountCircle className={styles.userIcon} />
                  <a className={styles.userName} onClick={() => navigate('client/')}>
                    {currentRole === UserRole.ADMIN
                      ? currentUser.firstName + ' ' + currentUser.lastName
                      : currentUser.businessName}
                  </a>
                </div>
              ) : (
                <div className={styles.btnLogin}>
                  <a onClick={() => dispatch(openModal(ModalTypes.LOGIN))}>Login</a>
                </div>
              )}
            </div>
            <ShoppingCart className={styles.shoppingCart} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
