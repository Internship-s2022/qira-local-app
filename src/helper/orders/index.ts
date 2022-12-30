import { format } from 'date-fns';
import Dinero from 'dinero.js';

import { FormattedOrder, Order } from 'src/redux/orders/types';
import { OrderState } from 'src/types';

export const formatOrders = (data: Order[]) => {
  data.sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime());

  const listData: FormattedOrder[] = data.map((order) => {
    return {
      id: order._id,
      client: order.client.businessName,
      orderDate: formatDate(order.orderDate),
      payAuthDate: formatDate(order.payAuthDate),
      deliverDate: formatDate(order.deliverDate),
      amounts: Dinero({ amount: Math.round(order.amounts.total) }).toFormat('$0,0.00'),
      state: formatOrderStateText(order.state),
    };
  });
  return listData;
};

export const formatOrderStateText = (state: OrderState) => {
  let orderState: string;
  switch (state) {
    case OrderState.APPROVE_PENDING:
      orderState = 'PENDIENTE DE APROBACIÓN';
      break;
    case OrderState.DELIVERY_PENDING:
      orderState = 'PENDIENTE DE ENTREGA';
      break;
    case OrderState.DELIVERED:
      orderState = 'ENTREGADO';
      break;
    case OrderState.REJECTED:
      orderState = 'RECHAZADO';
      break;
  }
  return orderState;
};

export const formatDate = (date?: string | Date) => {
  if (date) {
    const newDate = new Date(date);
    return format(newDate, 'dd/MM/yyyy');
  }
  return '-';
};
