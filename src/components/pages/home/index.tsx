import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';

import ProductCard from 'src/components/shared/ui/product-card';
import { getPublicCategories } from 'src/redux/category/thunk';
import { getNewProducts } from 'src/redux/products/selectors/new-products';
import { getPublicProducts } from 'src/redux/products/thunks';
import { clearOrderData } from 'src/redux/shopping-cart/actions';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './home.module.css';

const Home = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const newProducts = useSelector(getNewProducts);
  const categories = useSelector((state: RootState) => state.categories.categories);
  const isFetchingCategories = useSelector((state: RootState) => state.categories.isFetching);
  const isFetchingProducts = useSelector((state: RootState) => state.products.isFetching);

  useEffect(() => {
    dispatch(getPublicProducts());
    dispatch(getPublicCategories());
    dispatch(clearOrderData());
  }, []);
  return (
    <section className={styles.container}>
      <section>
        <img
          className={styles.coverPhoto}
          src={process.env.REACT_APP_URL_IMAGE_HOME}
          alt="photo-cover"
        />
      </section>
      <section className={styles.productsSection}>
        <h2>Productos destacados</h2>
        <div className={styles.productsCardsContainer}>
          {(isFetchingProducts ? Array.from(new Array(4)) : newProducts).map((product) => {
            return product ? (
              <ProductCard key={product._id} product={product} />
            ) : (
              <div className={styles.productCard}>
                <div>
                  <Skeleton variant="rectangular" width={220} height={220} animation="wave" />
                </div>
                <div className={styles.infoContainer}>
                  <Skeleton variant="rectangular" width={200} height={20} animation="wave" />
                  <Skeleton variant="rectangular" width={200} height={20} animation="wave" />
                  <Skeleton variant="rectangular" width={200} height={34} animation="wave" />
                </div>
                <div>
                  <Skeleton variant="rounded" width={185} height={45} animation="wave" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.categorySection}>
        <h2>Categorías destacadas</h2>
        <div className={styles.categoriesContainer}>
          {(isFetchingCategories ? Array.from(new Array(6)) : categories).map((category) => {
            return (
              <Link
                className={styles.nameCategory}
                to={`/category/${category?.url}`}
                key={category?._id}
              >
                <div className={styles.categoryCard}>
                  {category ? (
                    <>
                      <img
                        className={styles.imgCategory}
                        src={category.image.url}
                        alt={category.name}
                        title={category.name}
                      />
                      <div className={styles.nameCategory}>{category.name}</div>
                    </>
                  ) : (
                    <>
                      <Skeleton variant="rectangular" width={280} height={160} animation="wave" />
                      <Skeleton variant="text" animation="wave" />
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Home;
