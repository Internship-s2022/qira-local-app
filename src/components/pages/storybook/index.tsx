import React from 'react';

import ProductCard from 'src/components/shared/ui/product-card';
import { Category } from 'src/redux/category/types';
import { Product } from 'src/redux/products/types';
import { Currency, S3File } from 'src/types';

import styles from './storybook.module.css';

const Storybook = (): JSX.Element => {
  const exampleImage: S3File = {
    key: 'asd',
    url: 'https://arcencohogar.vtexassets.com/arquivos/ids/312630-500-auto?v=637764719471770000&width=500&height=auto&aspect=true',
  };

  const exampleCategory: Category = {
    _id: '1',
    image: exampleImage,
    name: 'Fungicidas',
    url: '',
    isActive: true,
    logicDelete: false,
  };

  const exampleProduct: Product = {
    _id: '1',
    brand: 'Marca',
    name: 'Modelo 1',
    price: 156.68,
    category: exampleCategory,
    image: exampleImage,
    currency: Currency.DOLLAR,
    stock: 10,
    isNew: true,
    isActive: true,
    logicDelete: false,
  };

  const exampleProduct2: Product = {
    _id: '2',
    brand: 'Marca',
    name: 'Modelo 2',
    price: 3943.98,
    category: exampleCategory,
    image: exampleImage,
    currency: Currency.PESO,
    stock: 0,
    isNew: false,
    isActive: true,
    logicDelete: false,
  };

  return (
    <div className={styles.container}>
      <ProductCard product={exampleProduct} />
      <ProductCard product={exampleProduct2} />
      <ProductCard product={exampleProduct} />
      <ProductCard product={exampleProduct2} />
    </div>
  );
};

export default Storybook;
