import { action } from 'typesafe-actions';

import { Actions } from './types';

export const addProduct = (Product) => action(Actions.ADD_PRODUCT, Product);

export const closeModal = (Product) => action(Actions.DELETE_PRODUCT, Product);

export const increaseProductQuantity = (Id) => action(Actions.INCREASE_PRODUCT_QUANTITY, Id);

export const decreaseProductQuantity = (Id) => action(Actions.DECREASE_PRODUCT_QUANTITY, Id);
