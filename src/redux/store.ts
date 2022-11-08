import { ActionCreator, AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { authReducer } from './auth/reducer';
import { ActionsType as AuthActionsType } from './auth/types';
import { categoryReducer } from './category/reducer';
import { ActionsType as CategoryActionsType } from './category/types';
import { clientReducer } from './clients/reducer';
import { exchangeRateReducer } from './exchange-rate/reducer';
import { modalReducer } from './modal/reducer';
import { productsReducer } from './products/reducer';
import { shoppingCartReducer } from './shopping-cart/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  modal: modalReducer,
  clients: clientReducer,
  shoppingCart: shoppingCartReducer,
  products: productsReducer,
  exchangeRate: exchangeRateReducer,
});

const configureStore = () => {
  const enhancer = composeWithDevTools(applyMiddleware(thunk));
  return createStore(rootReducer, enhancer);
};

const store = configureStore();

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = AuthActionsType | CategoryActionsType;
export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, RootAction>>;
export type ApiResponse<T> = { message: string; data: T; error: boolean };
export type AppDispatch<T> = ThunkDispatch<RootState, T, AnyAction>;

export default store;
