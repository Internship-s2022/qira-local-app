import { action } from 'typesafe-actions';

import { Actions } from './types';

export const addProduct = (product) => action(Actions.ADD_PRODUCT, product);

export const deleteProduct = (product) => action(Actions.DELETE_PRODUCT, product);

export const increaseProductQuantity = (id) => action(Actions.INCREASE_PRODUCT_QUANTITY, id);

export const decreaseProductQuantity = (id) => action(Actions.DECREASE_PRODUCT_QUANTITY, id);

export const openCart = () => action(Actions.OPEN_CART);

export const closeCart = () => action(Actions.CLOSE_CART);

export const addTransferReceipt = (receipt) => action(Actions.ADD_TRANSFER_RECEIPT, receipt);

export const removeTransferReceipt = () => action(Actions.REMOVE_TRANSFER_RECEIPT);

export const setAuthorized = (authorizedList) => action(Actions.SET_AUTHORIZED, authorizedList);

export const removeAuthorized = () => action(Actions.REMOVE_AUTHORIZED);

export const resetState = () => action(Actions.RESET_STATE);
