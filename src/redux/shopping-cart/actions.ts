import { action } from 'typesafe-actions';

import { Actions } from './types';

export const addProduct = (product) => action(Actions.ADD_PRODUCT, product);

export const deleteProduct = (product) => action(Actions.DELETE_PRODUCT, product);

export const increaseProductQuantity = (id) => action(Actions.INCREASE_PRODUCT_QUANTITY, id);

export const decreaseProductQuantity = (id) => action(Actions.DECREASE_PRODUCT_QUANTITY, id);

export const openCart = () => action(Actions.OPEN_CART);

export const closeCart = () => action(Actions.CLOSE_CART);
