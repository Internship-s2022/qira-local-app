import { Order } from 'src/redux/orders/types';
import { OrderState } from 'src/types';

export const formatOrders = (data) => {
  const listData = data.map((order) => {
    let stateSwitch;
    switch (order.state) {
      case OrderState.APPROVE_PENDING:
        stateSwitch = 'Pendiente de aprobación';
        break;
      case OrderState.DELIVERY_PENDING:
        stateSwitch = 'Pendiente de entrega';
        break;
      case OrderState.DELIVERED:
        stateSwitch = 'Entregado';
        break;
      case OrderState.REJECTED:
        stateSwitch = 'Rechazado';
        break;
    }
    return {
      id: order._id,
      client: order.client.businessName,
      orderDate: order.orderDate.split('T').at(0),
      amounts: order.amounts.total.toFixed(2),
      state: stateSwitch,
    };
  });
  return listData;
};

export const formatOrderStateText = (state) => {
  let stateSwitch;
  switch (state) {
    case OrderState.APPROVE_PENDING:
      stateSwitch = 'PENDIENTE DE APROBACIÓN';
      break;
    case OrderState.DELIVERY_PENDING:
      stateSwitch = 'PENDIENTE DE ENTREGA';
      break;
    case OrderState.DELIVERED:
      stateSwitch = 'ENTREGADO';
      break;
    case OrderState.REJECTED:
      stateSwitch = 'RECHAZADO';
      break;
  }
  return stateSwitch;
};
