import { configureStore } from '@reduxjs/toolkit';
import  appSlice from '../utils/appSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    // Add other slices here
  },
});

export default store;
