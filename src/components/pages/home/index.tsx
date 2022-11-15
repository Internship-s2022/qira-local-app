import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    dispatch(getPublicProducts());
    dispatch(getPublicCategories());
    dispatch(clearOrderData());
  }, []);
  return (
    <section className={styles.container}>
      <section data-testid="home-cover">
        <img
          className={styles.coverPhoto}
          src={process.env.REACT_APP_URL_IMAGE_HOME}
          alt="photo-cover"
        />
      </section>
      <section className={styles.productsSection} data-testid="featuredProducts">
        <h2>Productos destacados</h2>
        <div className={styles.productsCardsContainer}>
          {newProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      </section>
      <section className={styles.categorySection} data-testid="featuredCategories">
        <h2>Categorias destacadas</h2>
        <div className={styles.categoriesContainer}>
          {categories.map((category, index) => {
            return (
              <Link
                className={styles.nameCategory}
                to={`/category/${category.url}`}
                key={category._id}
                data-testid={`${index}-category`}
              >
                <div className={styles.categoryCard}>
                  <img className={styles.imgCategory} src={category.image.url} alt="" />
                  <div className={styles.nameCategory}>{category.name}</div>
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
