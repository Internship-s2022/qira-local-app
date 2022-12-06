import Dinero from 'dinero.js';
import { createSelector } from 'reselect';

import { RootState } from 'src/redux/store';
import { Currency } from 'src/types';

import { Amounts } from '../types';

const getShoppingCartProducts = (state: RootState) => state.shoppingCart.products;
const getExchangeRateFromParam = (state: RootState) => state.exchangeRate.exchangeRate?.value;

export const getOrderAmounts = createSelector(
  [getShoppingCartProducts, getExchangeRateFromParam],
  (productsList, exchangeRate) => {
    const dollarRate = exchangeRate && parseFloat(exchangeRate);
    const amounts: Amounts = {
      products: 0,
      taxes: 0,
      total: 0,
    };
    if (!dollarRate) {
      return amounts;
    }
    productsList.forEach((cartProduct) => {
      let productPrice = Dinero({ amount: cartProduct.product.price }).multiply(
        cartProduct.quantity,
      );
      if (cartProduct.product.currency === Currency.DOLLAR) {
        productPrice = productPrice.multiply(dollarRate);
      }
      amounts.products = Dinero({ amount: amounts.products }).add(productPrice).getAmount();
    });
    amounts.taxes = Dinero({ amount: amounts.products }).percentage(21).getAmount();
    amounts.total = Dinero({ amount: amounts.products })
      .add(Dinero({ amount: amounts.taxes }))
      .getAmount();
    return amounts;
  },
);
