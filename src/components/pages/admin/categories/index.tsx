import React, { useEffect, useState } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
import List from 'src/components/shared/ui/list';

// import { getCategory } from 'src/redux/category/thunk';
// import { AppDispatch, RootState } from 'src/redux/store';
import { Headers } from '../../../shared/ui/list/types';
import styles from './categories.module.css';

interface Category {
  id: string;
  name: string;
  isActive: boolean;
}

const Categories = (): JSX.Element => {
  // const dispatch: AppDispatch<null> = useDispatch();
  // useEffect(() => {
  //   dispatch(getCategory());
  // }, []);

  const data: Category[] = [
    { id: '1', name: 'Francisco', isActive: true },
    { id: '2', name: 'Gina', isActive: false },
    { id: '3', name: 'Ivan', isActive: true },
    { id: '4', name: 'Ariana', isActive: false },
  ];

  // const categories = useSelector((state: RootState) => state.categories.categories);
  const [listData, setListData] = useState(data);
  const headers: Headers[] = [
    { header: 'ID', key: 'id' },
    { header: 'Categories', key: 'name' },
    { header: 'Activo', key: 'isActive' },
  ];

  //setListData(data);
  return (
    <div className={styles.container}>
      <List<Category> headers={headers} data={listData}></List>
    </div>
  );
};

export default Categories;
