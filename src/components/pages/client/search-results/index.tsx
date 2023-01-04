import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ProductCard from 'src/components/shared/ui/product-card';
import QiraLoader from 'src/components/shared/ui/qira-loader';
import { getProductsFilteredBySearch } from 'src/redux/products/selectors/getProductsBySearch';
import { getPublicProducts } from 'src/redux/products/thunks';
import { AppDispatch, RootState } from 'src/redux/store';
import { capitalizeFirstLetter } from 'src/utils/formatters';

import styles from './search-results.module.css';

export const SearchProductsList = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();

  const filteredProducts = useSelector((state: RootState) =>
    getProductsFilteredBySearch(state, params.searchInput),
  );
  const isFetching = useSelector((state: RootState) => state.products.isFetching);

  useEffect(() => {
    dispatch(getPublicProducts());
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navHistory}>
        <Link className={styles.navLink} to="/">
          Inicio
        </Link>
        <p className={styles.navLink}>Búsqueda</p>
        <p className={styles.navLink}>{capitalizeFirstLetter(params.searchInput)}</p>
      </div>
      <section className={styles.productsContainer}>
        {isFetching ? (
          <div className={styles.loaderContainer}>
            <QiraLoader />
          </div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })
        ) : (
          <div className={styles.messageContainer}>
            <h2 className={styles.message}>
              Lo sentimos, no se encontraron productos que coincidan con su búsqueda.
            </h2>
          </div>
        )}
      </section>
    </div>
  );
};
