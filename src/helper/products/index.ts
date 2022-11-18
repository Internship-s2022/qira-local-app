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
    text = text + (product.price * quantity).toFixed(2);
  } else {
    text = text + product.price.toFixed(2);
  }
  return text;
};
