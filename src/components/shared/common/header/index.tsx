import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AccountCircle, KeyboardArrowDown, Search, ShoppingCart } from '@mui/icons-material';

import * as thunksCategories from 'src/redux/category/thunk';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';
import { UserRole } from 'src/types';

import styles from './header.module.css';

const Header = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const currentRole = useSelector((state: RootState) => state.auth.role);
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  useEffect(() => {
    dispatch(thunksCategories.getCategory());
  }, []);

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
                  <span className={styles.categoryOption} key={index}>
                    <a href={`/category/${category.url}`} className={styles.categoryLinks}>
                      {category.name}
                    </a>
                  </span>
                ))}
              </div>
            )}
            <div>
              <div className={styles.searchBar}>
                <input
                  type="text"
                  placeholder="Buscar..."
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      navigate(`/search-results/${searchInput}`);
                    }
                  }}
                />
                <div className={styles.searchIconContainer}>
                  <Search
                    className={styles.searchIcon}
                    color="secondary"
                    onClick={() => {
                      navigate(`/search-results/${searchInput}`);
                    }}
                  />
                </div>
              </div>
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
                  <AccountCircle className={styles.userIcon} />
                  <a onClick={() => dispatch(openModal(ModalTypes.LOGIN))}>Iniciar Sesion</a>
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
