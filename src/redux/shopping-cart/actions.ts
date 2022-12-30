import { action, createAsyncAction } from 'typesafe-actions';

import { FileToSend } from 'src/types';

import { Order } from '../orders/types';
import { ApiResponse } from '../store';
import { Actions, Authorized, ShoppingCartProduct } from './types';

export const addProduct = (product: ShoppingCartProduct) => action(Actions.ADD_PRODUCT, product);

export const deleteProduct = (product: string) => action(Actions.DELETE_PRODUCT, product);

export const increaseProductQuantity = (id: string) =>
  action(Actions.INCREASE_PRODUCT_QUANTITY, id);

export const decreaseProductQuantity = (id: string) =>
  action(Actions.DECREASE_PRODUCT_QUANTITY, id);

export const openCart = () => action(Actions.OPEN_CART);

export const closeCart = () => action(Actions.CLOSE_CART);

export const addTransferReceipt = (receipt: FileToSend) =>
  action(Actions.ADD_TRANSFER_RECEIPT, receipt);

export const removeTransferReceipt = () => action(Actions.REMOVE_TRANSFER_RECEIPT);

export const setAuthorized = (authorizedList: Authorized[]) =>
  action(Actions.SET_AUTHORIZED, authorizedList);

export const clearOrderData = () => action(Actions.CLEAR_ORDER_DATA);

export const resetState = () => action(Actions.RESET_STATE);

export const setDeliveryDate = (estimatedDeliveryDate: string) =>
  action(Actions.SET_DELIVERY_DATE, estimatedDeliveryDate);

export const createOrderActions = createAsyncAction(
  Actions.CREATE_ORDER_PENDING,
  Actions.CREATE_ORDER_SUCCESS,
  Actions.CREATE_ORDER_ERROR,
)<void, Order, ApiResponse<unknown>>();
