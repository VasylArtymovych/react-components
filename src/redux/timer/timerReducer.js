import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './timerActions';

export default createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});
