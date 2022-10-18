import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from 'src/components/shared/ui/list';
import { getCategory } from 'src/redux/category/thunk';
import { AppDispatch, RootState } from 'src/redux/store';

import { Headers } from '../../../shared/ui/list/types';
import styles from './categories.module.css';

interface Category {
  id: string;
  name: string;
  isActive: boolean;
}

const Categories = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const isFetching = useSelector((state: RootState) => state.categories.isFetching);

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const formatData = (data) => {
    const listData = data.map((category) => {
      return {
        id: category._id,
        name: category.name,
        isActive: category.isActive ? 'Activada' : 'Desactivada',
      };
    });
    console.log(listData);
    return listData;
  };

  const headers: Headers[] = [
    { header: 'ID', key: 'id' },
    { header: 'Categories', key: 'name' },
    { header: 'Estado', key: 'isActive' },
  ];

  return (
    <div className={styles.container}>
      {isFetching ? <></> : <List<Category> headers={headers} data={formatData(categories)}></List>}
    </div>
  );
};

export default Categories;
