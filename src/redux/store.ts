import { ActionCreator, applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';

import { IvaCondition } from 'src/types';

import * as authActions from './auth/actions';
import { authReducer } from './auth/reducer';
import { categoryReducer } from './category/reducer';
import { ActionsType as CategoryActionsType } from './category/types';
export interface Address {
  province: string;
  city: string;
  zipCode: string;
  street: string;
}

export interface User {
  firebaseUid: string;
  businessName: string;
  cuit: string;
  ivaCondition: IvaCondition;
  address: Address;
  phoneNumber: string;
  email: string;
  isActive: boolean;
  logicDelete: boolean;
}

export interface UserCredentials {
  user: User;
  token: string;
  role: string;
}

export type AuthActionsType = ActionType<typeof authActions>;

export enum Actions {
  LOGIN_PENDING = 'LOGIN_PENDING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',

  LOGOUT_USER = 'LOGOUT_USER',

  GET_AUTH_PENDING = 'GET_AUTH_PENDING',
  GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS',
  GET_AUTH_ERROR = 'GET_AUTH_ERROR',

  SET_AUTHENTICATION = 'SET_AUTHENTICATION',
}

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoryReducer,
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

export default store;
