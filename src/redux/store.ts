import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({});

const configureStore = () => {
  const enhacer = composeWithDevTools();
  return createStore(rootReducer, enhacer);
};

const store = configureStore();

export default store;
