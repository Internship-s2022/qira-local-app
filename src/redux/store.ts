import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { testReducer } from './test/reducer';

const rootReducer = combineReducers({
  test: testReducer,
});

const configureStore = () => {
  const enhacer = composeWithDevTools();
  return createStore(rootReducer, enhacer);
};

const store = configureStore();

export default store;
