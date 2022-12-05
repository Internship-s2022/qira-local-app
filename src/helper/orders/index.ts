import { format } from 'date-fns';

import { OrderState } from 'src/types';

export const formatOrders = (data) => {
  const listData = data.map((order) => {
    const orderDate = new Date(order.orderDate);
    const formattedDate = format(orderDate, 'dd/MM/yyyy');

    return {
      id: order._id,
      client: order.client.businessName,
      orderDate: formattedDate,
      amounts: '$ ' + order.amounts.total.toFixed(2),
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
