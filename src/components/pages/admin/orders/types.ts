import { Client } from 'src/redux/clients/types';
import { Amounts } from 'src/redux/orders/types';

export interface FormattedOrder {
  id: string;
  client: Client['businessName'];
  orderDate: string;
  amounts: Amounts['total'];
  state: string;
}
