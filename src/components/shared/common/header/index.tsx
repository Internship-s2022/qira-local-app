import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  AccountCircle,
  InfoOutlined,
  KeyboardArrowDown,
  Search,
  ShoppingCart,
} from '@mui/icons-material';
import { Badge, BadgeProps, styled } from '@mui/material';

import * as thunksCategories from 'src/redux/category/thunk';
import { getExchangeRate } from 'src/redux/exchange-rate/thunks';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { closeCart, openCart } from 'src/redux/shopping-cart/actions';
import { AppDispatch, RootState } from 'src/redux/store';
import { UserRole } from 'src/types';

import styles from './header.module.css';

const Header = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const shoppingCartProducts = useSelector((state: RootState) => state.shoppingCart.products);
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const currentRole = useSelector((state: RootState) => state.auth.role);
  const exchangeRate = useSelector((state: RootState) => state.exchangeRate.exchangeRate);
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  useEffect(() => {
    dispatch(thunksCategories.getPublicCategories());
    dispatch(getExchangeRate());
    dispatch(closeCart());
  }, []);

  const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    '& .MuiBadge-badge': {
      right: 8,
      top: 6,
      textAlign: 'center',
      fontSize: '11px',
      minWidth: '15px',
      minHeight: '15px',
      width: '17px',
      height: '17px',
    },
  }));

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navBarContainer}>
        <div className={styles.currency}>
          <p>Tipo de cambio</p>
          {exchangeRate && (
            <>
              <p className={styles.exchangeRate}>{`ARS ${exchangeRate?.value}`}</p>
              <InfoOutlined className={styles.infoIcon} />
            </>
          )}
        </div>
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
                    <Link className={styles.userName} to="/profile/my-orders">
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
            <StyledBadge
              badgeContent={shoppingCartProducts.length}
              max={9}
              color="info"
              className={styles.shoppingCartContainer}
            >
              <ShoppingCart className={styles.shoppingCart} onClick={() => dispatch(openCart())} />
            </StyledBadge>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
