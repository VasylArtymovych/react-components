import { createStore, combineReducers } from 'redux';
import counterReducer from './Counter/counter-reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;
