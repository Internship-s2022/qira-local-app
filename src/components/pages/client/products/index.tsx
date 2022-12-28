import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ProductCard from 'src/components/shared/ui/product-card';
import QiraLoader from 'src/components/shared/ui/qira-loader';
import { getPublicCategories } from 'src/redux/category/thunk';
import { getProductsFilteredByCategory } from 'src/redux/products/selectors/getProductsByCategory';
import { getPublicProducts } from 'src/redux/products/thunk';
import { AppDispatch, RootState } from 'src/redux/store';
import { capitalizeFirstLetter } from 'src/utils/formatters';

import styles from './products.module.css';

export const ProductsList = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();

  const filteredProducts = useSelector((state: RootState) =>
    getProductsFilteredByCategory(state, params.url),
  );
  const isFetching = useSelector(
    (state: RootState) => state.categories.isFetching || state.products.isFetching,
  );

  useEffect(() => {
    dispatch(getPublicCategories());
    dispatch(getPublicProducts());
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navHistory}>
        <Link className={styles.navLink} to="/">
          Inicio
        </Link>
        <p className={styles.navLink}>Categorías</p>
        <p className={styles.navLink}>{capitalizeFirstLetter(params.url.replace('-', ' '))}</p>
      </div>
      <section className={styles.productsContainer}>
        {isFetching ? (
          <QiraLoader />
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })
        ) : (
          <div className={styles.messageContainer}>
            <h2 className={styles.message}>
              Lo sentimos, no se encontraron productos con esa categoría.
            </h2>
          </div>
        )}
      </section>
    </div>
  );
};
