import { createSelector } from 'reselect';

import { formatOrders } from 'src/helper/orders';
import { RootState } from 'src/redux/store';

const getOrders = (state: RootState) => state.orders.orders;
const getOrderStateFromParam = (state: RootState) => state.orders.filterState;

export const getOrdersFilteredByState = createSelector(
  [getOrders, getOrderStateFromParam],
  (ordersList, orderState) => {
    if (!orderState) {
      return formatOrders(ordersList);
    }
    const filteredList = ordersList.filter((order) => order.state === orderState);
    return formatOrders(filteredList);
  },
);
