import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AccountCircle, KeyboardArrowDown, Search, ShoppingCart } from '@mui/icons-material';

import * as thunksCategories from 'src/redux/category/thunk';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { openCart } from 'src/redux/shopping-cart/actions';
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
            <Link to="/">
              <img
                className={styles.logoQira}
                src={`${process.env.PUBLIC_URL}/assets/images/logo-qira.svg`}
                alt=""
              />
            </Link>
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
                    <Link to={`/category/${category.url}`} className={styles.categoryLinks}>
                      {category.name}
                    </Link>
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
                  {currentRole === UserRole.ADMIN ? (
                    <Link className={styles.userName} to="/admin">
                      {currentUser.firstName + ' ' + currentUser.lastName}
                    </Link>
                  ) : (
                    <Link className={styles.userName} to="/client">
                      {currentUser.businessName}
                    </Link>
                  )}
                </div>
              ) : (
                <div className={styles.btnLogin}>
                  <AccountCircle className={styles.userIcon} />
                  <p onClick={() => dispatch(openModal(ModalTypes.LOGIN))} data-testid="login-btn">
                    Iniciar Sesión
                  </p>
                </div>
              )}
            </div>
            <ShoppingCart className={styles.shoppingCart} onClick={() => dispatch(openCart())} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
