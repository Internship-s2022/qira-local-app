import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from 'src/components/shared/ui/product-card';
import { getPublicCategories } from 'src/redux/category/thunk';
import { getNewProducts } from 'src/redux/products/selectors/new-products';
import { getPublicProducts } from 'src/redux/products/thunks';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './home.module.css';

const Home = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const newProducts = useSelector((state: RootState) => getNewProducts(state));
  const categories = useSelector((state: RootState) => state.categories.categories);

  useEffect(() => {
    dispatch(getPublicProducts());
    dispatch(getPublicCategories());
  }, []);
  console.log(categories);

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
        <h2>Ofertas destacados</h2>
        <div className={styles.productsCardsContainer}>
          {newProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      </section>
      <section className={styles.categorySection}>
        <h2>Categorias destacadas</h2>
        <div className={styles.categoriesContainer}>
          {categories.map((category, index) => {
            return (
              <>
                <div className={styles.categoryCard}>
                  <img className={styles.imgCategory} src={category.image.url} alt="" />
                  <div key={index}>{category.name}</div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Home;
