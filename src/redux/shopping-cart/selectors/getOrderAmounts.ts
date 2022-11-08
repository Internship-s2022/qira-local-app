import { createSelector } from 'reselect';

import { RootState } from 'src/redux/store';
import { Currency } from 'src/types';

import { Amounts } from '../types';

const getShoppingCartProducts = (state: RootState) => state.shoppingCart.products;
const getExchangeRateFromParam = (state: RootState, rate: number) => rate;

export const getOrderAmounts = createSelector(
  [getShoppingCartProducts, getExchangeRateFromParam],
  (productsList, exchangeRate) => {
    const amounts: Amounts = {
      products: 0,
      taxes: 0,
      total: 0,
    };
    productsList.forEach((cartProduct) => {
      let productPrice = cartProduct.product.price * cartProduct.quantity;
      if (cartProduct.product.currency === Currency.DOLLAR) {
        productPrice = productPrice * exchangeRate;
      }
      amounts.products = amounts.products + productPrice;
    });
    amounts.taxes = amounts.products * 0.21;
    amounts.total = amounts.products + amounts.taxes;
    return amounts;
  },
);
