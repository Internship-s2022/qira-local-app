import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'src/redux/store';

export const ProductsList = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const category = useSelector((state: RootState) => state.categories);
  return <></>;
};
