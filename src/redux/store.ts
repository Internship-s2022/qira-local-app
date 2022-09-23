import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({});

const configureStore = () => {
  return createStore(rootReducer);
};

const store = configureStore();

export default store;
