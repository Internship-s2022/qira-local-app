import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from 'src/components/shared/ui/product-card';
import { getPublicCategory } from 'src/redux/category/thunk';
import { getProductsFilteredByCategory } from 'src/redux/products/selectors/getProductsByCategory';
import { getPublicProducts } from 'src/redux/products/thunks';
import { AppDispatch, RootState } from 'src/redux/store';
import { capitalizeFirstLetter } from 'src/utils/formatters';

import styles from './products.module.css';

export const ProductsList = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();

  const filteredProducts = useSelector((state: RootState) =>
    getProductsFilteredByCategory(state, params?.url),
  );

  useEffect(() => {
    dispatch(getPublicCategory());
    dispatch(getPublicProducts());
  }, []);

  return (
    <div>
      <div className={styles.navHistory}>
        <a className={styles.navLink} href="/">
          Inicio
        </a>
        <p className={styles.navLink}>Categorias</p>
        <a className={styles.navLink}>{capitalizeFirstLetter(params.url)}</a>
      </div>
      <section className={styles.container}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })
        ) : (
          <h3 className={styles.message}>
            Lo sentimos, no se encontraron productos con esa categoría.
          </h3>
        )}
      </section>
    </div>
  );
};
