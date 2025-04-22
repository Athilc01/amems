import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import your slice reducer

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the reducer to your store
  },
});

export default store;
