import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  AccountCircle,
  ArrowBack,
  InfoOutlined,
  KeyboardArrowDown,
  MenuOutlined,
  Search,
  ShoppingCart,
} from '@mui/icons-material';
import { Badge, BadgeProps, styled, Tooltip, useMediaQuery } from '@mui/material';

import * as thunksCategories from 'src/redux/category/thunk';
import { getExchangeRate } from 'src/redux/exchange-rate/thunks';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { closeCart, openCart } from 'src/redux/shopping-cart/actions';
import { closeSidebar, openSidebar } from 'src/redux/sidebar/actions';
import { AppDispatch, RootState } from 'src/redux/store';
import { UserRole } from 'src/types';

import styles from './header.module.css';

const Header = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const shoppingCartProducts = useSelector((state: RootState) => state.shoppingCart.products);
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const currentRole = useSelector((state: RootState) => state.auth.role);
  const exchangeRate = useSelector((state: RootState) => state.exchangeRate.exchangeRate);
  const sidebarIsOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const isMobile = useMediaQuery('(max-width: 600px)');
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
              <Tooltip
                title={`La fecha de cotizacion es: ${exchangeRate.date}`}
                placement={isMobile ? 'bottom' : 'right'}
                arrow
                disableFocusListener
              >
                <InfoOutlined className={styles.infoIcon} />
              </Tooltip>
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
                data-testid="logo-qira"
              />
            </Link>
            <div className={styles.menuAndLogoContainer}>
              {currentRole != UserRole.ADMIN && (
                <div onClick={() => dispatch(sidebarIsOpen ? closeSidebar() : openSidebar())}>
                  <MenuOutlined
                    className={
                      location.pathname.includes('/profile') ? styles.menuOnProfile : styles.menu
                    }
                  />
                  <ArrowBack
                    onClick={() => navigate('/')}
                    className={
                      location.pathname.includes('/profile')
                        ? styles.arrowBackOnProfile
                        : styles.arrowBack
                    }
                  ></ArrowBack>
                </div>
              )}
              <div onClick={() => dispatch(closeSidebar())}>
                <Link to="/">
                  <img
                    className={styles.logoQ}
                    src={`${process.env.PUBLIC_URL}/assets/images/logoQ.svg`}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.searchContainer}>
            <div
              className={styles.buttonCategories}
              onMouseEnter={() => setOpenSelect(true)}
              onMouseLeave={() => setOpenSelect(false)}
              data-testid="btn-categories"
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
                    <Link
                      to={`/category/${category.url}`}
                      className={styles.categoryLinks}
                      data-testid={`category-${index}`}
                    >
                      {category.name}
                    </Link>
                  </span>
                ))}
              </div>
            )}
            <div>
              <div className={styles.searchBar}>
                <input
                  data-testid="search-input"
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
                    data-testid="search-icon"
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
                  <Link
                    className={styles.userIconLink}
                    to={currentRole === UserRole.ADMIN ? '/admin' : '/profile/my-orders'}
                  >
                    <AccountCircle className={styles.userIcon} />
                  </Link>
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
                <div
                  onClick={() => dispatch(openModal(ModalTypes.LOGIN))}
                  className={styles.btnLogin}
                >
                  <>
                    <AccountCircle className={styles.userIcon} />
                    <p className={styles.pLogin} data-testid="login-btn">
                      Iniciar sesión
                    </p>
                  </>
                </div>
              )}
            </div>
            <StyledBadge
              data-testid="shopping-cart"
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
