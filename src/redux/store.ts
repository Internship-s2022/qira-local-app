import { ActionCreator, AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';

import { authReducer } from './auth/reducer';
import { ActionsType as AuthActionsType } from './auth/types';
import { categoryReducer } from './category/reducer';
import { ActionsType as CategoryActionsType } from './category/types';
import { clientReducer } from './clients/reducer';
import { exchangeRateReducer } from './exchange-rate/reducer';
import { modalReducer } from './modal/reducer';
import { ordersReducer } from './orders/reducer';
import { productsReducer } from './products/reducer';
import { shoppingCartReducer } from './shopping-cart/reducer';
import { sidebarReducer } from './sidebar/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  modal: modalReducer,
  clients: clientReducer,
  shoppingCart: shoppingCartReducer,
  products: productsReducer,
  exchangeRate: exchangeRateReducer,
  orders: ordersReducer,
  sidebar: sidebarReducer,
});

const persistConfig = {
  key: 'root-ql',
  storage,
  whitelist: ['auth', 'shoppingCart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createPersistedStore = () => {
  const enhancer = composeWithDevTools(applyMiddleware(thunk));
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
};

export const { store, persistor } = createPersistedStore();

export const useAppDispatch: () => AppDispatch<null> = useDispatch;

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = AuthActionsType | CategoryActionsType;
export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, RootAction>>;
export type ApiResponse<T> = { message: string; data: T; error: boolean };
export type AppDispatch<T> = ThunkDispatch<RootState, T, AnyAction>;
