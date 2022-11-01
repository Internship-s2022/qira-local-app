import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from 'src/components/shared/ui/product-card';
import { getProductsFilteredBySearch } from 'src/redux/products/selectors/getProductsBySearch';
import { getPublicProducts } from 'src/redux/products/thunks';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './search-results.module.css';

export const SearchProductsList = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();

  const filteredProducts = useSelector((state: RootState) =>
    getProductsFilteredBySearch(state, params.searchInput),
  );

  useEffect(() => {
    dispatch(getPublicProducts());
  }, []);

  return (
    <section className={styles.productsContainer}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })
      ) : (
        <div className={styles.messageContainer}>
          <h3 className={styles.message}>
            Lo sentimos, no se encontraron productos que coincidan con su búsqueda.
          </h3>
        </div>
      )}
    </section>
  );
};
