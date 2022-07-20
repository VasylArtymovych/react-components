import { configureStore } from '@reduxjs/toolkit';
import timer from './timer/timerReducer';

const store = configureStore({
  reducer: {
    timer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
