import Dinero from 'dinero.js';

import { Product } from 'src/redux/products/types';
import { Currency } from 'src/types';

export const formatPriceText = (product: Product, quantity?: number) => {
  let text = '';
  if (product.currency === Currency.DOLLAR) {
    text = 'USD ';
  } else {
    text = 'AR$ ';
  }
  if (quantity && quantity > 0) {
    text = text + Dinero({ amount: product.price }).multiply(quantity).toFormat('0,0.00');
  } else {
    text = text + Dinero({ amount: product.price }).toFormat('0,0.00');
  }
  return text;
};
