import { Action, ActionCreator, applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';

import { authReducer } from './auth/reducer';
import { ActionsType as AuthActionsTypes } from './auth/types';
import { categoryReducer } from './category/reducer';
import { ActionsType as CategoryActionsTypes } from './category/types';

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
export type RootAction = CategoryActionsTypes | AuthActionsTypes;
export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, Action<null>>>;
export type ApiResponse<T> = { message: string; data: T; error: boolean };

export default store;
