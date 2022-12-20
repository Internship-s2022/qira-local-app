import { initialState as AuthInitialState } from '../auth/reducer';
import { initialState as CategoryInitialState } from '../category/reducer';
import { initialState as ClientsInitialState } from '../clients/reducer';
import { initialState as ExchangeRateInitialState } from '../exchange-rate/reducer';
import { initialState as ModalInitialState } from '../modal/reducer';
import { initialState as OrdersInitialState } from '../orders/reducer';
import { initialState as ProductsInitialState } from '../products/reducer';
import { initialState as ShoppingCartInitialState } from '../shopping-cart/reducer';
import { initialState as SidebarInitialState } from '../sidebar/reducer';

export const mockedStore = {
  auth: AuthInitialState,
  categories: CategoryInitialState,
  clients: ClientsInitialState,
  exchangeRate: ExchangeRateInitialState,
  modal: ModalInitialState,
  orders: OrdersInitialState,
  products: ProductsInitialState,
  shoppingCart: ShoppingCartInitialState,
  sidebar: SidebarInitialState,
};
