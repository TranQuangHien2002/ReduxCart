// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../src/reducers/reducers';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
